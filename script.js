const editor = CodeMirror(document.getElementById('editor'), {
    mode: 'lua',
    lineNumbers: true,
    theme: 'monokai',
    indentWithTabs: true,
    smartIndent: true,
    lineWrapping: true,
    tabSize: 4,
    indentUnit: 4
});

editor.setSize(800, 600);

editor.on('inputRead', function onChange(editor, input) {
    if (input.text[0] === '.' || input.text[0] === '(') {
        editor.showHint({ completeSingle: false });
    }
});

editor.on('change', function (editor) {
    const code = editor.getValue();
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(code, '*');
    }
});

// iframe-container onload
window.addEventListener('message', function (e) {
    if (e.data === 'ready') {
        const iframe = document.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            setTimeout(() => {
                const code = editor.getValue();
                iframe.contentWindow.postMessage(code, '*');
            }, 100);
        }
    }
}, false);

// Handle tab key presses to insert spaces instead of moving focus
editor.setOption('extraKeys', {
    Tab: function (cm) {
        if (cm.somethingSelected()) {
            cm.indentSelection("add");
        } else {
            cm.replaceSelection(Array(cm.getOption("tabSize") + 1).join(" "), "end", "+input");
        }
    }
});

editor.on('inputRead', function onChange(editor) {
    CodeMirror.showHint(editor, getCustomHints, { completeSingle: false });
});

function matchesShorthand(shorthand, full) {
    for (let i = 0; i < shorthand.length; i++) {
        if (full.indexOf(shorthand[i]) === -1) {
            return false;
        }
        full = full.slice(full.indexOf(shorthand[i]) + 1);
    }
    return true;
}

function getCustomHints(editor) {
    const cursor = editor.getCursor();
    const token = editor.getTokenAt(cursor);
    const start = token.start;
    const end = cursor.ch;
    const currentWord = token.string.slice(0, end - start);

    const minChars = 5;  // adjust this value as needed
    if (currentWord.length < minChars) {
        return;
    }

    const filteredList = loveAPI.filter(word => matchesShorthand(currentWord, word));

    return {
        list: filteredList,
        from: CodeMirror.Pos(cursor.line, start),
        to: CodeMirror.Pos(cursor.line, end)
    };
}

async function saveToFiddle(content) {
    const response = await fetch('https://jsonblob.com/api/jsonBlob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: content }),
    });

    const blobUrl = response.headers.get('Location');
    const blobId = blobUrl.split('/').pop(); // Extract the blobId from the end of the URL
    const url = window.location.origin + window.location.pathname + '?id=' + blobId
    return url;
}


async function loadFromFiddle(blobUrl) {
    const response = await fetch(blobUrl);
    const data = await response.json();
    return data.code;
}

document.getElementById('saveButton').addEventListener('click', async function () {
    const content = editor.getValue();
    const savedUrl = await saveToFiddle(content);
    navigator.clipboard.writeText(savedUrl);
    alert('Your fiddle has been saved. The URL has been copied to your clipboard:\n' + savedUrl + '\n\nWarning: This URL will expire when not accessed for 30 days.');
});

function getBlobIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function loadContentIfBlobIdPresent() {
    const blobId = getBlobIdFromUrl();
    if (blobId) {
        const content = await loadFromFiddle('https://jsonblob.com/api/jsonBlob/' + blobId);
        editor.setValue(content);
    }
}

// Load content if blobId is present in the URL when the page loads
loadContentIfBlobIdPresent();
loveAPI = [
    'love.getVersion',
    'love.hasDeprecationOutput',
    'love.isVersionCompatible',
    'love.setDeprecationOutput',
    'love.audio.getActiveEffects',
    'love.audio.getActiveSourceCount',
    'love.audio.getDistanceModel',
    'love.audio.getDopplerScale',
    'love.audio.getEffect',
    'love.audio.getMaxSceneEffects',
    'love.audio.getMaxSourceEffects',
    'love.audio.getOrientation',
    'love.audio.getPosition',
    'love.audio.getRecordingDevices',
    'love.audio.getSourceCount',
    'love.audio.getVelocity',
    'love.audio.getVolume',
    'love.audio.isEffectsSupported',
    'love.audio.newQueueableSource',
    'love.audio.newSource',
    'love.audio.pause',
    'love.audio.play',
    'love.audio.setDistanceModel',
    'love.audio.setDopplerScale',
    'love.audio.setEffect',
    'love.audio.setMixWithSystem',
    'love.audio.setOrientation',
    'love.audio.setPosition',
    'love.audio.setVelocity',
    'love.audio.setVolume',
    'love.audio.stop',
    'love.data.compress',
    'love.data.decode',
    'love.data.decompress',
    'love.data.encode',
    'love.data.getPackedSize',
    'love.data.hash',
    'love.data.newByteData',
    'love.data.newDataView',
    'love.data.pack',
    'love.data.unpack',
    'love.event.clear',
    'love.event.poll',
    'love.event.pump',
    'love.event.push',
    'love.event.quit',
    'love.event.wait',
    'love.filesystem.append',
    'love.filesystem.areSymlinksEnabled',
    'love.filesystem.createDirectory',
    'love.filesystem.getAppdataDirectory',
    'love.filesystem.getCRequirePath',
    'love.filesystem.getDirectoryItems',
    'love.filesystem.getIdentity',
    'love.filesystem.getInfo',
    'love.filesystem.getRealDirectory',
    'love.filesystem.getRequirePath',
    'love.filesystem.getSaveDirectory',
    'love.filesystem.getSource',
    'love.filesystem.getSourceBaseDirectory',
    'love.filesystem.getUserDirectory',
    'love.filesystem.getWorkingDirectory',
    'love.filesystem.init',
    'love.filesystem.isFused',
    'love.filesystem.lines',
    'love.filesystem.load',
    'love.filesystem.mount',
    'love.filesystem.newFile',
    'love.filesystem.newFileData',
    'love.filesystem.read',
    'love.filesystem.remove',
    'love.filesystem.setCRequirePath',
    'love.filesystem.setIdentity',
    'love.filesystem.setRequirePath',
    'love.filesystem.setSource',
    'love.filesystem.setSymlinksEnabled',
    'love.filesystem.unmount',
    'love.filesystem.write',
    'love.font.newBMFontRasterizer',
    'love.font.newGlyphData',
    'love.font.newImageRasterizer',
    'love.font.newRasterizer',
    'love.font.newTrueTypeRasterizer',
    'love.graphics.applyTransform',
    'love.graphics.arc',
    'love.graphics.captureScreenshot',
    'love.graphics.circle',
    'love.graphics.clear',
    'love.graphics.discard',
    'love.graphics.draw',
    'love.graphics.drawInstanced',
    'love.graphics.drawLayer',
    'love.graphics.ellipse',
    'love.graphics.flushBatch',
    'love.graphics.getBackgroundColor',
    'love.graphics.getBlendMode',
    'love.graphics.getCanvas',
    'love.graphics.getCanvasFormats',
    'love.graphics.getColor',
    'love.graphics.getColorMask',
    'love.graphics.getDPIScale',
    'love.graphics.getDefaultFilter',
    'love.graphics.getDepthMode',
    'love.graphics.getDimensions',
    'love.graphics.getFont',
    'love.graphics.getFrontFaceWinding',
    'love.graphics.getHeight',
    'love.graphics.getImageFormats',
    'love.graphics.getLineJoin',
    'love.graphics.getLineStyle',
    'love.graphics.getLineWidth',
    'love.graphics.getMeshCullMode',
    'love.graphics.getPixelDimensions',
    'love.graphics.getPixelHeight',
    'love.graphics.getPixelWidth',
    'love.graphics.getPointSize',
    'love.graphics.getRendererInfo',
    'love.graphics.getScissor',
    'love.graphics.getShader',
    'love.graphics.getStackDepth',
    'love.graphics.getStats',
    'love.graphics.getStencilTest',
    'love.graphics.getSupported',
    'love.graphics.getSystemLimits',
    'love.graphics.getTextureTypes',
    'love.graphics.getWidth',
    'love.graphics.intersectScissor',
    'love.graphics.inverseTransformPoint',
    'love.graphics.isActive',
    'love.graphics.isGammaCorrect',
    'love.graphics.isWireframe',
    'love.graphics.line',
    'love.graphics.newArrayImage',
    'love.graphics.newCanvas',
    'love.graphics.newCubeImage',
    'love.graphics.newFont',
    'love.graphics.newImage',
    'love.graphics.newImageFont',
    'love.graphics.newMesh',
    'love.graphics.newParticleSystem',
    'love.graphics.newQuad',
    'love.graphics.newShader',
    'love.graphics.newSpriteBatch',
    'love.graphics.newText',
    'love.graphics.newVideo',
    'love.graphics.newVolumeImage',
    'love.graphics.origin',
    'love.graphics.points',
    'love.graphics.polygon',
    'love.graphics.pop',
    'love.graphics.present',
    'love.graphics.print',
    'love.graphics.printf',
    'love.graphics.push',
    'love.graphics.rectangle',
    'love.graphics.replaceTransform',
    'love.graphics.reset',
    'love.graphics.rotate',
    'love.graphics.scale',
    'love.graphics.setBackgroundColor',
    'love.graphics.setBlendMode',
    'love.graphics.setCanvas',
    'love.graphics.setColor',
    'love.graphics.setColorMask',
    'love.graphics.setDefaultFilter',
    'love.graphics.setDepthMode',
    'love.graphics.setFont',
    'love.graphics.setFrontFaceWinding',
    'love.graphics.setLineJoin',
    'love.graphics.setLineStyle',
    'love.graphics.setLineWidth',
    'love.graphics.setMeshCullMode',
    'love.graphics.setNewFont',
    'love.graphics.setPointSize',
    'love.graphics.setScissor',
    'love.graphics.setShader',
    'love.graphics.setStencilTest',
    'love.graphics.setWireframe',
    'love.graphics.shear',
    'love.graphics.stencil',
    'love.graphics.transformPoint',
    'love.graphics.translate',
    'love.graphics.validateShader',
    'love.image.isCompressed',
    'love.image.newCompressedData',
    'love.image.newImageData',
    'love.joystick.getGamepadMappingString',
    'love.joystick.getJoystickCount',
    'love.joystick.getJoysticks',
    'love.joystick.loadGamepadMappings',
    'love.joystick.saveGamepadMappings',
    'love.joystick.setGamepadMapping',
    'love.keyboard.getKeyFromScancode',
    'love.keyboard.getScancodeFromKey',
    'love.keyboard.hasKeyRepeat',
    'love.keyboard.hasScreenKeyboard',
    'love.keyboard.hasTextInput',
    'love.keyboard.isDown',
    'love.keyboard.isScancodeDown',
    'love.keyboard.setKeyRepeat',
    'love.keyboard.setTextInput',
    'love.math.colorFromBytes',
    'love.math.colorToBytes',
    'love.math.compress',
    'love.math.decompress',
    'love.math.gammaToLinear',
    'love.math.getRandomSeed',
    'love.math.getRandomState',
    'love.math.isConvex',
    'love.math.linearToGamma',
    'love.math.newBezierCurve',
    'love.math.newRandomGenerator',
    'love.math.newTransform',
    'love.math.noise',
    'love.math.random',
    'love.math.randomNormal',
    'love.math.setRandomSeed',
    'love.math.setRandomState',
    'love.math.triangulate',
    'love.mouse.getCursor',
    'love.mouse.getPosition',
    'love.mouse.getRelativeMode',
    'love.mouse.getSystemCursor',
    'love.mouse.getX',
    'love.mouse.getY',
    'love.mouse.isCursorSupported',
    'love.mouse.isDown',
    'love.mouse.isGrabbed',
    'love.mouse.isVisible',
    'love.mouse.newCursor',
    'love.mouse.setCursor',
    'love.mouse.setGrabbed',
    'love.mouse.setPosition',
    'love.mouse.setRelativeMode',
    'love.mouse.setVisible',
    'love.mouse.setX',
    'love.mouse.setY',
    'love.physics.getDistance',
    'love.physics.getMeter',
    'love.physics.newBody',
    'love.physics.newChainShape',
    'love.physics.newCircleShape',
    'love.physics.newDistanceJoint',
    'love.physics.newEdgeShape',
    'love.physics.newFixture',
    'love.physics.newFrictionJoint',
    'love.physics.newGearJoint',
    'love.physics.newMotorJoint',
    'love.physics.newMouseJoint',
    'love.physics.newPolygonShape',
    'love.physics.newPrismaticJoint',
    'love.physics.newPulleyJoint',
    'love.physics.newRectangleShape',
    'love.physics.newRevoluteJoint',
    'love.physics.newRopeJoint',
    'love.physics.newWeldJoint',
    'love.physics.newWheelJoint',
    'love.physics.newWorld',
    'love.physics.setMeter',
    'love.sound.newDecoder',
    'love.sound.newSoundData',
    'love.system.getClipboardText',
    'love.system.getOS',
    'love.system.getPowerInfo',
    'love.system.getProcessorCount',
    'love.system.hasBackgroundMusic',
    'love.system.openURL',
    'love.system.setClipboardText',
    'love.system.vibrate',
    'love.thread.getChannel',
    'love.thread.newChannel',
    'love.thread.newThread',
    'love.timer.getAverageDelta',
    'love.timer.getDelta',
    'love.timer.getFPS',
    'love.timer.getTime',
    'love.timer.sleep',
    'love.timer.step',
    'love.touch.getPosition',
    'love.touch.getPressure',
    'love.touch.getTouches',
    'love.video.newVideoStream',
    'love.window.close',
    'love.window.fromPixels',
    'love.window.getDPIScale',
    'love.window.getDesktopDimensions',
    'love.window.getDisplayCount',
    'love.window.getDisplayName',
    'love.window.getDisplayOrientation',
    'love.window.getFullscreen',
    'love.window.getFullscreenModes',
    'love.window.getIcon',
    'love.window.getMode',
    'love.window.getPosition',
    'love.window.getSafeArea',
    'love.window.getTitle',
    'love.window.getVSync',
    'love.window.hasFocus',
    'love.window.hasMouseFocus',
    'love.window.isDisplaySleepEnabled',
    'love.window.isMaximized',
    'love.window.isMinimized',
    'love.window.isOpen',
    'love.window.isVisible',
    'love.window.maximize',
    'love.window.minimize',
    'love.window.requestAttention',
    'love.window.restore',
    'love.window.setDisplaySleepEnabled',
    'love.window.setFullscreen',
    'love.window.setIcon',
    'love.window.setMode',
    'love.window.setPosition',
    'love.window.setTitle',
    'love.window.setVSync',
    'love.window.showMessageBox',
    'love.window.toPixels',
    'love.window.updateMode',
];
require "js"

local timer = 0
local last_data = nil
local ignore = function() end

function love.run()
    if love.load then love.load(love.arg.parseGameArguments(arg), arg) end

    -- We don't want the first frame's dt to include time taken by love.load.
    if love.timer then love.timer.step() end

    local dt = 0

    -- Main loop time.
    return function()
        -- Process events.
        if love.event then
            love.event.pump()
            for name, a, b, c, d, e, f in love.event.poll() do
                if name == "quit" then
                    if not love.quit or not love.quit() then
                        return a or 0
                    end
                end
                love.handlers[name](a, b, c, d, e, f)
            end
        end

        -- Update dt, as we'll be passing it to update
        if love.timer then dt = love.timer.step() end

        JS.retrieveData(dt)

        timer = timer + dt
        if timer > .1 then
            JS.newRequest('getLoveCode()',
                function(data)
                    if data ~= last_data then
                        last_data = data
                        local f = loadstring(data)
                        if f then
                            local success = xpcall(f, ignore)
                            if success then
                                if love.load then love.load() end
                            end
                        end
                    end
                end)
            timer = 0
        end

        -- Call update and draw
        if love.update then love.update(dt) end -- will pass 0 if love.timer is disabled

        if love.graphics and love.graphics.isActive() then
            love.graphics.origin()
            love.graphics.clear(love.graphics.getBackgroundColor())

            if love.draw then love.draw() end

            love.graphics.present()
        end

        if love.timer then love.timer.sleep(0.001) end
    end
end

local old_errorhandler = love.errorhandler

function love.errorhandler(msg)
    JS.callJS("onLoveError()")
    old_errorhandler(msg)
end

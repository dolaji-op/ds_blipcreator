local resourceName = 'es_extended'

if not GetResourceState(resourceName):find('start') then return end

local ESX = exports[resourceName]:getSharedObject()

function GetPlayer()
	return ESX.PlayerData
end

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function()
    TriggerEvent('ds_blipcreator:setBlips',blips)
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function ()
    TriggerServerEvent('ds_blipcreator:getBlips')
end)

function IsPlayerInGroup( filter)
    local type = type(filter)
	local player = GetPlayer()

    if type == 'string' then
        if player.job.name == filter then
            return player.job.name, player.job.grade
        end
    else
        local tabletype = table.type(filter)

        if tabletype == 'hash' then
            local grade = filter[player.job.name]

            if grade and grade <= player.job.grade then
                return player.job.name, player.job.grade
            end
        elseif tabletype == 'array' then
            for i = 1, #filter do
                if player.job.name == filter[i] then
                    return player.job.name, player.job.grade
                end
            end
        end
    end
end


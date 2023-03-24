RegisterNUICallback('createBlip', function(data, cb)
	cb(1)
	SetNuiFocus(false, false)

	if data.groups and not next(data.groups) then
		data.groups = nil
	end


	TriggerServerEvent('ds_blipcreator:editBlip', data.id or false, data)
end)

RegisterNUICallback('deleteblip', function(id, cb)
	cb(1)
	TriggerServerEvent('ds_blipcreator:editBlip', id)
end)

RegisterNUICallback('teleportToBlip', function(id, cb)
    cb(1)
    SetNuiFocus(false, false)
    local blipCoords = blips[id].coords
    if not blipCoords then return end
    SetEntityCoords(PlayerPedId(), blipCoords.x, blipCoords.y, blipCoords.z)
end)

RegisterNUICallback('exit', function(_, cb)
	cb(1)
	SetNuiFocus(false, false)
end)

local function openUi(id)
	if not NuiHasLoaded then
		NuiHasLoaded = true
		SendNuiMessage(json.encode({
			action = 'updateBlipData',
			data = blips
		}, { with_hole = false }))
		Wait(100)
	end

	SetNuiFocus(true, true)
	SendNuiMessage(json.encode({
		action = 'setVisible',
		data = id
	}))
end

RegisterNetEvent('ds_blipcreator:triggeredCommand', function()
	openUi(nil)
end)

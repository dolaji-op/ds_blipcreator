if not LoadResourceFile(GetCurrentResourceName(), 'web/build/index.html') then
	print('Unable to load UI. Build ds_blipcreator or download the latest release.\n	^3https://github.com/overextended/ds_blipcreator/releases/latest/download/ds_blipcreator.zip^0')
end

-- TriggerServerEvent('ds_blipcreator:getBlips')

local function createblip(blip)
	blip.zone = GetLabelText(GetNameOfZone(blip.coords.x, blip.coords.y, blip.coords.z))
	if not blip.hideUi  and ( blip.groups == nil or IsPlayerInGroup(blip.groups)) then

		if blips[blip.id].blipObj ~= nil then
			RemoveBlip(blips[blip.id].blipObj)
		end


		blips[blip.id].blipObj = AddBlipForCoord(blip.coords.x, blip.coords.y, blip.coords.z)
		local newBlip = blips[blip.id].blipObj
		SetBlipSprite(newBlip,blip.Sprite)
		SetBlipScale  (newBlip, blip.scale/10)
		SetBlipColour (newBlip, blip.sColor)
		SetBlipAsShortRange(newBlip, blip.sRange)

		ShowTickOnBlip(newBlip, blip.tickb)
		ShowOutlineIndicatorOnBlip(newBlip, blip.outline)
		SetBlipAlpha(newBlip, blip.alpha)
		if blip.bflash then
			SetBlipFlashes(newBlip, true)
			SetBlipFlashInterval(newBlip, tonumber(blip.ftimer))
		end

		if blip.hideb then
			SetBlipDisplay(newBlip, 3)
		else
			SetBlipDisplay(newBlip, 2)
		end

		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString(blip.name)
		EndTextCommandSetBlipName(newBlip)
	else
		if blips[blip.id].blipObj ~= nil then
			RemoveBlip(blips[blip.id].blipObj)
			blips[blip.id].blipObj = nil
		end
	end
end



RegisterNetEvent('ds_blipcreator:setBlips', function(data)
	blips = data

	for _, blip in pairs(data) do
		createblip(blip)
	end

end)

RegisterNetEvent('ds_blipcreator:setBlip', function(id, source, data)
	if not blips then return end
	if data then
		blips[id] = data
		createblip(data)
		if NuiHasLoaded then

			SendNuiMessage(json.encode({
				action = 'updateBlipData',
				data = data
			}))
		end
	end
end)



RegisterNetEvent('ds_blipcreator:editBlip', function(id, data)
	if source == '' then return end
	local blip = blips[id]

	if data then
		data.zone = blip.zone or GetLabelText(GetNameOfZone(blip.coords.x, blip.coords.y, blip.coords.z))
	end

	blips[id] = data

	if data then
		createblip(data)
	end

	if NuiHasLoaded then
		SendNuiMessage(json.encode({
			action = 'updateBlipData',
			data = data or id
		}))
	end
end)
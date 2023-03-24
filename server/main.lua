if not LoadResourceFile(GetCurrentResourceName(), 'web/build/index.html') then
	print('Unable to load UI. Build ds_blipcreator or download the latest release.\n	^3https://github.com/overextended/ds_blipcreator/releases/latest/download/ds_blipcreator.zip^0')
end


if not GetResourceState('oxmysql'):find('start') then
	print("oxmysql not found script will not work")
	return
end

local blips = {}

local function encodeData(blip)

	return json.encode({
		coords = blip.coords,
		groups = blip.groups,
		items = blip.items,
		hideUi = blip.hideUi,
		ftimer = blip.ftimer,
		sColor= blip.sColor,
		scImg= blip.scImg,
		Sprite= blip.Sprite,
		SpriteImg= blip.SpriteImg,
		scale= blip.scale,
		alpha= blip.alpha,
		colors= blip.colors,
		hideb= blip.hideb,
		tickb= blip.tickb,
		bflash= blip.bflash,
		sRange= blip.sRange,
		outline= blip.outline,
	})
end

local function createBlip(id, blip, name)
	blip.id = id
	blip.name = name
	blip.ftimer = tonumber(blip.ftimer)
	blip.coords = vector3(blip.coords.x, blip.coords.y, blip.coords.z)

	MySQL.update('UPDATE ds_blipcreator SET data = ? WHERE id = ?', { encodeData(blip), id })

	blips[id] = blip
	return blip
end

local isLoaded = false

MySQL.ready(function()
	local success, result = pcall(MySQL.query.await, 'SELECT id, name, data FROM ds_blipcreator') --[[@as any]]

	if not success then
		-- because some people can't run sql files
		success, result = pcall(MySQL.query, [[CREATE TABLE `ds_blipcreator` (
			`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
			`name` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_unicode_ci',
			`data` LONGTEXT NOT NULL COLLATE 'utf8mb4_unicode_ci',
			PRIMARY KEY (`id`) USING BTREE
		) COLLATE='utf8mb4_unicode_ci' ENGINE=InnoDB; ]])

		if not success then
			return error(result)
		end

		print("Created table 'ds_blipcreator' in MySQL database.")
	elseif result then
		for i = 1, #result do
			local blip = result[i]
			createBlip(blip.id, json.decode(blip.data), blip.name)
		end
	end

	isLoaded = true
end)

RegisterNetEvent('ds_blipcreator:getBlips', function()
	local source = source
	while not isLoaded do Wait(100) end

	TriggerClientEvent('ds_blipcreator:setBlips', source, blips)
end)

RegisterNetEvent('ds_blipcreator:editBlip', function(id, data)
	if IsPlayerAceAllowed(source, 'command.blipcreator') then
		if data then
			if not data.coords then
				local ped = GetPlayerPed(source)
    			data.coords = GetEntityCoords(ped)
			end

			if not data.name then
				data.name = tostring(data.coords)
			end
		end

		if id then
			if data then
				MySQL.update('UPDATE ds_blipcreator SET name = ?, data = ? WHERE id = ?', { data.name, encodeData(data), id })
			else
				MySQL.update('DELETE FROM ds_blipcreator WHERE id = ?', { id })
			end

			blips[id] = data
			TriggerClientEvent('ds_blipcreator:editBlip', -1, id, data)
		else
			local insertId = MySQL.insert.await('INSERT INTO ds_blipcreator (name, data) VALUES (?, ?)', { data.name, encodeData(data) })
			local blip = createBlip(insertId, data, data.name)

			TriggerClientEvent('ds_blipcreator:setBlip', -1, blip.id, false, blip)
		end
	end
end)

RegisterCommand("blipcreator", function(source)
    if IsPlayerAceAllowed(source, 'command.blipcreator') then
		TriggerClientEvent('ds_blipcreator:triggeredCommand', source)
	end
end, true)

local resourceName = 'qb-core'

if not GetResourceState(resourceName):find('start') then return end

local QB = exports[resourceName]:GetCoreObject()

function GetPlayer()
	return QB.Functions.GetPlayerData()
end


RegisterNetEvent('QBCore:Client:OnJobUpdate', function()
	TriggerEvent('ds_blipcreator:setBlips',blips)
end)

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
	TriggerServerEvent('ds_blipcreator:getBlips')

end)


local groups = { 'job', 'gang' }

function IsPlayerInGroup( filter)
	local type = type(filter)
	local player = GetPlayer()
	if type == 'string' then
		for i = 1, #groups do
			local data = player[groups[i]]

			if data.name == filter then
				return data.name, data.grade.level
			end
		end
	else

		local tabletype = table.type(filter)
		if tabletype == 'hash' then
			for i = 1, #groups do
				local data = player[groups[i]]
				local grade = filter[data.name]

				if grade and grade <= data.grade.level then
					return data.name, data.grade.level
				end
			end
		elseif tabletype == 'array' then
			for i = 1, #filter do
				local group = filter[i]

				for j = 1, #groups do
					local data = player[groups[j]]

					if data.name == group then
						return data.name, data.grade.level
					end
				end
			end
		end
	end
end

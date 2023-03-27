--[[ FX Information ]]--
fx_version   'cerulean'
use_experimental_fxv2_oal 'yes'
lua54        'yes'
game         'gta5'

--[[ Resource Information ]]--
name         'ds_blipcreator'
version      '0.1.6'
license      'GPL-3.0-or-later'
author       'dolaji-op'
repository   'https://github.com/dolaji-op/ds_blipcreator'

client_scripts {
	'client/main.lua',
	'client/utils.lua',
	'client/framework/*.lua',
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server/main.lua',
}

ui_page 'web/build/index.html'

files {
	'web/build/index.html',
	'web/build/**/*',
}

dependencies {
	'oxmysql',
}

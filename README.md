# ds_blipcreator

Blip management resource, with compatibility for qb-core, and es_extended.

_The UI needs to be built - use the [latest release](https://github.com/dolaji-op/ds_blipcreator/releases/latest/download/ds_blipcreator.zip) if you want to drag-n-drop._

## Dependencies

### [oxmysql](https://github.com/overextended/oxmysql)

Blips are stored in a database for ease-of-use and to allow data to be easily cleared or shared.

mysql-async is no longer supported.
  - does not support error-catching (pcall)
  - people use older versions which do not support parameters as arrays
  - it isn't maintained and has issues that will never be resolved

## Usage

Use the `/blipcreator` command to open the UI and enter the settings for your new blip.

## Contact

If you have any questions or feedback, please join our [Discord server](https://discord.gg/dolaji-s-scripts-952174929518936114) and let us know!

[![Discord Server](https://img.shields.io/discord/952174929518936114?color=7289DA&label=Discord&logo=discord&logoColor=ffffff)](https://discord.gg/dolaji-s-scripts-952174929518936114)

## Blip Settings

### General

- Blip name
  - Used to easily identify the blip.
- Flash Timer
  - Time in mili seconds after which blip will be flashed.
- Blip Scale
  - Size for the blip.
- Blip Opacity
  - Blip Opacity 0 to 255.
- Tick On Blip
  - This option will add tick on target blip.
- Outline
  - This option will add Outline on target blip.
- Hide on Minimap
  - Enable or disable blip in the minimap.
- Blip Flashes
  - Enable/Disable blip flash with timer.
- Short Range Blip
  - Enable if the target blip visible in short range only.
- Hide Blip
  - Hide created blips from map.

### Sprite

- Sprite ID
  - Select blip icon from the list, We have all Fivem blips with images of blip .

### Colors

- Color ID
  - Select blip color from the list, We have all Fivem blips colors in the list.

### Groups

- Group
  - Framework dependent, referring to jobs, gangs, etc.
- Grade
  - The minimum grade to allow access for the group (0 to allow all).

## Credits

- [oxmysql](https://github.com/overextended/oxmysql) by Overextended
- [ox_doorlock](https://github.com/overextended/ox_doorlock) by Overextended
- [ds_blipcreator](https://github.com/dolaji-op/ds_blipcreator) by Dolaji

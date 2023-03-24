import { Box, Group, TextInput, Tooltip, ActionIcon, Modal } from '@mantine/core';
import { useState } from 'react';
import { TbSettings, TbTrash } from 'react-icons/tb';
import { useSetters, useStore } from '../../../../../store';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ItemFields: React.FC = () => {
  const Sprite = useStore((state) => state.Sprite);
  const SpriteImg = useStore((state) => state.SpriteImg);

  const setSprite = useSetters((setter) => setter.setSprite);
  const setSpriteImg = useSetters((setter) => setter.setSpriteImg);

  const handleImageClick = (img: string, id: number) => {
    setSprite(id === Sprite ? null : id);
    setSpriteImg(img === SpriteImg ? null : img);
  };

  return (
    <>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        {SpriteImg && (
          <Box
            style={{
              width: 50,
              height: 50,
              borderRadius: 4,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1c1c1c',
              marginRight: 16,
            }}
          >
            <img
              src={`${SpriteImg}?w=52&h=52&fit=crop&auto=format`}
              srcSet={`${SpriteImg}?w=52&h=52&fit=crop&auto=format&dpr=2 2x`}
              alt={SpriteImg.toString()}

            />
          </Box>
        )}
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <span>ID:</span>
          <TextInput
            placeholder="No image selected"
            disabled
            value={Sprite != null ? Sprite.toString() : ''}
            style={{ marginLeft: 8, background: 'none', boxShadow: 'none' }}
          />
        </Box>
      </Box>
      <ImageList cols={7}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleImageClick(item.img, item.id)}>
            <Box
              style={{
                width: 52,
                height: 52,
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: '#1c1c1c',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={`${item.img}?w=52&h=52&fit=crop&auto=format`}
                srcSet={`${item.img}?w=52&h=52&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id.toString()}
                loading="lazy"
                style={SpriteImg === item.img ? { filter: 'blur(2px)' } : {}}
              />
            </Box>
            {SpriteImg === item.img && (
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '35%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

const itemData = [
  {
    img:"https://docs.fivem.net/blips/radar_higher.png",
    id: 0
  },
   {
    img:"https://docs.fivem.net/blips/radar_level.png",
    id: 1
  },
   {
    img:"https://docs.fivem.net/blips/radar_lower.png",
    id: 2
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_ped.png",
    id: 3
  },
   {
    img:"https://docs.fivem.net/blips/radar_wanted_radius.png",
    id: 4
  },

   {
    img:"https://docs.fivem.net/blips/radar_centre.png",
    id: 6
  },
   {
    img:"https://docs.fivem.net/blips/radar_north.png",
    id: 7
  },
   {
    img:"https://docs.fivem.net/blips/radar_waypoint.png",
    id: 8
  },


   {
    img:"https://docs.fivem.net/blips/radar_weapon_higher.png",
    id: 11
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_lower.png",
    id: 12
  },
   {
    img:"https://docs.fivem.net/blips/radar_higher_ai.png",
    id: 13
  },
   {
    img:"https://docs.fivem.net/blips/radar_lower_ai.png",
    id: 14
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_heli_spin.png",
    id: 15
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_plane_move.png",
    id: 16
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_crew.png",
    id: 27
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_friendlies.png",
    id: 28
  },
   {
    img:"https://docs.fivem.net/blips/radar_cable_car.png",
    id: 36
  },
   {
    img:"https://docs.fivem.net/blips/radar_activities.png",
    id: 37
  },
   {
    img:"https://docs.fivem.net/blips/radar_raceflag.png",
    id: 38
  },
   {
    img:"https://docs.fivem.net/blips/radar_safehouse.png",
    id: 40
  },
   {
    img:"https://docs.fivem.net/blips/radar_police.png",
    id: 41
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_chase.png",
    id: 42
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_heli.png",
    id: 43
  },

   {
    img:"https://docs.fivem.net/blips/radar_snitch.png",
    id: 47
  },

   {
    img:"https://docs.fivem.net/blips/radar_crim_carsteal.png",
    id: 50
  },
   {
    img:"https://docs.fivem.net/blips/radar_crim_drugs.png",
    id: 51
  },
   {
    img:"https://docs.fivem.net/blips/radar_crim_holdups.png",
    id: 52
  },

   {
    img:"https://docs.fivem.net/blips/radar_cop_patrol.png",
    id: 56
  },

   {
    img:"https://docs.fivem.net/blips/radar_crim_wanted.png",
    id: 58
  },
   {
    img:"https://docs.fivem.net/blips/radar_heist.png",
    id: 59
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_station.png",
    id: 60
  },
   {
    img:"https://docs.fivem.net/blips/radar_hospital.png",
    id: 61
  },

   {
    img:"https://docs.fivem.net/blips/radar_helicopter.png",
    id: 64
  },
   {
    img:"https://docs.fivem.net/blips/radar_random_character.png",
    id: 66
  },
   {
    img:"https://docs.fivem.net/blips/radar_security_van.png",
    id: 67
  },
   {
    img:"https://docs.fivem.net/blips/radar_tow_truck.png",
    id: 68
  },

   {
    img:"https://docs.fivem.net/blips/radar_barber.png",
    id: 71
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_mod_shop.png",
    id: 72
  },
   {
    img:"https://docs.fivem.net/blips/radar_clothes_store.png",
    id: 73
  },
   {
    img:"https://docs.fivem.net/blips/radar_tattoo.png",
    id: 75
  },
   {
    img:"https://docs.fivem.net/blips/radar_armenian_family.png",
    id: 76
  },
   {
    img:"https://docs.fivem.net/blips/radar_lester_family.png",
    id: 77
  },
   {
    img:"https://docs.fivem.net/blips/radar_michael_family.png",
    id: 78
  },
   {
    img:"https://docs.fivem.net/blips/radar_trevor_family.png",
    id: 79
  },
   {
    img:"https://docs.fivem.net/blips/radar_jewelry_heist.png",
    id: 80
  },

   {
    img:"https://docs.fivem.net/blips/radar_rampage.png",
    id: 84
  },
   {
    img:"https://docs.fivem.net/blips/radar_vinewood_tours.png",
    id: 85
  },
   {
    img:"https://docs.fivem.net/blips/radar_lamar_family.png",
    id: 86
  },

   {
    img:"https://docs.fivem.net/blips/radar_chinese_strand.png",
    id: 89
  },
   {
    img:"https://docs.fivem.net/blips/radar_flight_school.png",
    id: 90
  },


   {
    img:"https://docs.fivem.net/blips/radar_bar.png",
    id: 93
  },
   {
    img:"https://docs.fivem.net/blips/radar_base_jump.png",
    id: 94
  },



   {
    img:"https://docs.fivem.net/blips/radar_car_wash.png",
    id: 100
  },
   {
    img:"https://docs.fivem.net/blips/radar_comedy_club.png",
    id: 102
  },
   {
    img:"https://docs.fivem.net/blips/radar_darts.png",
    id: 103
  },


   {
    img:"https://docs.fivem.net/blips/radar_fbi_officers_strand.png",
    id: 106
  },

   {
    img:"https://docs.fivem.net/blips/radar_financier_strand.png",
    id: 108
  },
   {
    img:"https://docs.fivem.net/blips/radar_golf.png",
    id: 109
  },
   {
    img:"https://docs.fivem.net/blips/radar_gun_shop.png",
    id: 110
  },

   {
    img:"https://docs.fivem.net/blips/radar_michael_family_exile.png",
    id: 112
  },

   {
    img:"https://docs.fivem.net/blips/radar_shooting_range.png",
    id: 119
  },
   {
    img:"https://docs.fivem.net/blips/radar_solomon_strand.png",
    id: 120
  },
   {
    img:"https://docs.fivem.net/blips/radar_strip_club.png",
    id: 121
  },
   {
    img:"https://docs.fivem.net/blips/radar_tennis.png",
    id: 122
  },
   {
    img:"https://docs.fivem.net/blips/radar_trevor_family_exile.png",
    id: 123
  },

   {
    img:"https://docs.fivem.net/blips/radar_triathlon.png",
    id: 126
  },
   {
    img:"https://docs.fivem.net/blips/radar_off_road_racing.png",
    id: 127
  },

   {
    img:"https://docs.fivem.net/blips/radar_snitch_red.png",
    id: 133
  },
   {
    img:"https://docs.fivem.net/blips/radar_crim_cuff_keys.png",
    id: 134
  },
   {
    img:"https://docs.fivem.net/blips/radar_cinema.png",
    id: 135
  },
   {
    img:"https://docs.fivem.net/blips/radar_music_venue.png",
    id: 136
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_station_blue.png",
    id: 137
  },

   {
    img:"https://docs.fivem.net/blips/radar_weed_stash.png",
    id: 140
  },
   {
    img:"https://docs.fivem.net/blips/radar_hunting.png",
    id: 141
  },



   {
    img:"https://docs.fivem.net/blips/radar_arms_dealing.png",
    id: 147
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_friend.png",
    id: 148
  },
   {
    img:"https://docs.fivem.net/blips/radar_celebrity_theft.png",
    id: 149
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_assault_rifle.png",
    id: 150
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_bat.png",
    id: 151
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_grenade.png",
    id: 152
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_health.png",
    id: 153
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_knife.png",
    id: 154
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_molotov.png",
    id: 155
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_pistol.png",
    id: 156
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_rocket.png",
    id: 157
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_shotgun.png",
    id: 158
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_smg.png",
    id: 159
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_sniper.png",
    id: 160
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_noise.png",
    id: 161
  },
   {
    img:"https://docs.fivem.net/blips/radar_poi.png",
    id: 162
  },
   {
    img:"https://docs.fivem.net/blips/radar_passive.png",
    id: 163
  },
   {
    img:"https://docs.fivem.net/blips/radar_usingmenu.png",
    id: 164
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_cops_partner.png",
    id: 171
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_minigun.png",
    id: 173
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_armour.png",
    id: 175
  },
   {
    img:"https://docs.fivem.net/blips/radar_property_takeover.png",
    id: 176
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_mexicans_highlight.png",
    id: 177
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_bikers_highlight.png",
    id: 178
  },


   {
    img:"https://docs.fivem.net/blips/radar_property_takeover_bikers.png",
    id: 181
  },

   {
    img:"https://docs.fivem.net/blips/radar_camera.png",
    id: 184
  },
   {
    img:"https://docs.fivem.net/blips/radar_centre_red.png",
    id: 185
  },
   {
    img:"https://docs.fivem.net/blips/radar_handcuff_keys_bikers.png",
    id: 186
  },

   {
    img:"https://docs.fivem.net/blips/radar_handcuffs_closed_bikers.png",
    id: 188
  },
   {
    img:"https://docs.fivem.net/blips/radar_handcuffs_closed_vagos.png",
    id: 189
  },

   {
    img:"https://docs.fivem.net/blips/radar_yoga.png",
    id: 197
  },
   {
    img:"https://docs.fivem.net/blips/radar_taxi.png",
    id: 198
  },
   {
    img:"https://docs.fivem.net/blips/radar_shrink.png",
    id: 205
  },
   {
    img:"https://docs.fivem.net/blips/radar_epsilon.png",
    id: 206
  },
   {
    img:"https://docs.fivem.net/blips/radar_financier_strand_grey.png",
    id: 207
  },


   {
    img:"https://docs.fivem.net/blips/radar_franklin_c.png",
    id: 214
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_vehicle.png",
    id: 225
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_vehicle_bikers.png",
    id: 226
  },

   {
    img:"https://docs.fivem.net/blips/radar_guncar.png",
    id: 229
  },

   {
    img:"https://docs.fivem.net/blips/radar_gang_cops_highlight.png",
    id: 233
  },

   {
    img:"https://docs.fivem.net/blips/radar_custody_bikers.png",
    id: 237
  },

   {
    img:"https://docs.fivem.net/blips/radar_arms_dealing_air.png",
    id: 251
  },
   {
    img:"https://docs.fivem.net/blips/radar_playerstate_arrested.png",
    id: 252
  },
   {
    img:"https://docs.fivem.net/blips/radar_playerstate_custody.png",
    id: 253
  },

   {
    img:"https://docs.fivem.net/blips/radar_playerstate_keyholder.png",
    id: 255
  },





   {
    img:"https://docs.fivem.net/blips/radar_fairground.png",
    id: 266
  },
   {
    img:"https://docs.fivem.net/blips/radar_property.png",
    id: 267
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_highlight.png",
    id: 268
  },
   {
    img:"https://docs.fivem.net/blips/radar_altruist.png",
    id: 269
  },
   {
    img:"https://docs.fivem.net/blips/radar_ai.png",
    id: 270
  },

   {
    img:"https://docs.fivem.net/blips/radar_cash_pickup.png",
    id: 272
  },
   {
    img:"https://docs.fivem.net/blips/radar_chop.png",
    id: 273
  },
   {
    img:"https://docs.fivem.net/blips/radar_dead.png",
    id: 274
  },


   {
    img:"https://docs.fivem.net/blips/radar_hooker.png",
    id: 279
  },
   {
    img:"https://docs.fivem.net/blips/radar_friend.png",
    id: 280
  },

   {
    img:"https://docs.fivem.net/blips/radar_custody_dropoff.png",
    id: 285
  },



   {
    img:"https://docs.fivem.net/blips/radar_simeon_family.png",
    id: 293
  },

   {
    img:"https://docs.fivem.net/blips/radar_bounty_hit.png",
    id: 303
  },
   {
    img:"https://docs.fivem.net/blips/radar_ugc_mission.png",
    id: 304
  },
   {
    img:"https://docs.fivem.net/blips/radar_horde.png",
    id: 305
  },
   {
    img:"https://docs.fivem.net/blips/radar_cratedrop.png",
    id: 306
  },
   {
    img:"https://docs.fivem.net/blips/radar_plane_drop.png",
    id: 307
  },
   {
    img:"https://docs.fivem.net/blips/radar_sub.png",
    id: 308
  },
   {
    img:"https://docs.fivem.net/blips/radar_race.png",
    id: 309
  },
   {
    img:"https://docs.fivem.net/blips/radar_deathmatch.png",
    id: 310
  },
   {
    img:"https://docs.fivem.net/blips/radar_arm_wrestling.png",
    id: 311
  },

   {
    img:"https://docs.fivem.net/blips/radar_shootingrange_gunshop.png",
    id: 313
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_air.png",
    id: 314
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_land.png",
    id: 315
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_sea.png",
    id: 316
  },
   {
    img:"https://docs.fivem.net/blips/radar_tow.png",
    id: 317
  },
   {
    img:"https://docs.fivem.net/blips/radar_garbage.png",
    id: 318
  },


   {
    img:"https://docs.fivem.net/blips/radar_getaway_car.png",
    id: 326
  },

   {
    img:"https://docs.fivem.net/blips/radar_gang_bike.png",
    id: 348
  },

   {
    img:"https://docs.fivem.net/blips/radar_property_for_sale.png",
    id: 350
  },
   {
    img:"https://docs.fivem.net/blips/radar_gang_attack_package.png",
    id: 351
  },
   {
    img:"https://docs.fivem.net/blips/radar_martin_madrazzo.png",
    id: 352
  },
   {
    img:"https://docs.fivem.net/blips/radar_enemy_heli_spin.png",
    id: 353
  },
   {
    img:"https://docs.fivem.net/blips/radar_boost.png",
    id: 354
  },
   {
    img:"https://docs.fivem.net/blips/radar_devin.png",
    id: 355
  },
   {
    img:"https://docs.fivem.net/blips/radar_dock.png",
    id: 356
  },
   {
    img:"https://docs.fivem.net/blips/radar_garage.png",
    id: 357
  },
   {
    img:"https://docs.fivem.net/blips/radar_golf_flag.png",
    id: 358
  },
   {
    img:"https://docs.fivem.net/blips/radar_hangar.png",
    id: 359
  },
   {
    img:"https://docs.fivem.net/blips/radar_helipad.png",
    id: 360
  },
   {
    img:"https://docs.fivem.net/blips/radar_jerry_can.png",
    id: 361
  },
   {
    img:"https://docs.fivem.net/blips/radar_mask.png",
    id: 362
  },
   {
    img:"https://docs.fivem.net/blips/radar_heist_prep.png",
    id: 363
  },
   {
    img:"https://docs.fivem.net/blips/radar_incapacitated.png",
    id: 364
  },
   {
    img:"https://docs.fivem.net/blips/radar_spawn_point_pickup.png",
    id: 365
  },
   {
    img:"https://docs.fivem.net/blips/radar_boilersuit.png",
    id: 366
  },
   {
    img:"https://docs.fivem.net/blips/radar_completed.png",
    id: 367
  },
   {
    img:"https://docs.fivem.net/blips/radar_rockets.png",
    id: 368
  },
   {
    img:"https://docs.fivem.net/blips/radar_garage_for_sale.png",
    id: 369
  },
   {
    img:"https://docs.fivem.net/blips/radar_helipad_for_sale.png",
    id: 370
  },
   {
    img:"https://docs.fivem.net/blips/radar_dock_for_sale.png",
    id: 371
  },
   {
    img:"https://docs.fivem.net/blips/radar_hangar_for_sale.png",
    id: 372
  },
   {
    img:"https://docs.fivem.net/blips/radar_placeholder_6.png",
    id: 373
  },
   {
    img:"https://docs.fivem.net/blips/radar_business.png",
    id: 374
  },
   {
    img:"https://docs.fivem.net/blips/radar_business_for_sale.png",
    id: 375
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_bike.png",
    id: 376
  },
   {
    img:"https://docs.fivem.net/blips/radar_parachute.png",
    id: 377
  },
   {
    img:"https://docs.fivem.net/blips/radar_team_deathmatch.png",
    id: 378
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_foot.png",
    id: 379
  },
   {
    img:"https://docs.fivem.net/blips/radar_vehicle_deathmatch.png",
    id: 380
  },

   {
    img:"https://docs.fivem.net/blips/radar_aim.png",
    id: 390
  },
   {
    img:"https://docs.fivem.net/blips/radar_cratedrop_background.png",
    id: 391
  },
   {
    img:"https://docs.fivem.net/blips/radar_green_and_net_player1.png",
    id: 392
  },


   {
    img:"https://docs.fivem.net/blips/radar_creator.png",
    id: 398
  },
   {
    img:"https://docs.fivem.net/blips/radar_creator_direction.png",
    id: 399
  },
   {
    img:"https://docs.fivem.net/blips/radar_abigail.png",
    id: 400
  },
   {
    img:"https://docs.fivem.net/blips/radar_blimp.png",
    id: 401
  },
   {
    img:"https://docs.fivem.net/blips/radar_repair.png",
    id: 402
  },
   {
    img:"https://docs.fivem.net/blips/radar_testosterone.png",
    id: 403
  },
   {
    img:"https://docs.fivem.net/blips/radar_dinghy.png",
    id: 404
  },
   {
    img:"https://docs.fivem.net/blips/radar_fanatic.png",
    id: 405
  },
   {
    img:"https://docs.fivem.net/blips/radar_info_icon.png",
    id: 407
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_the_flag.png",
    id: 408
  },
   {
    img:"https://docs.fivem.net/blips/radar_last_team_standing.png",
    id: 409
  },
   {
    img:"https://docs.fivem.net/blips/radar_boat.png",
    id: 410
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_the_flag_base.png",
    id: 411
  },

   {
    img:"https://docs.fivem.net/blips/radar_capture_the_flag_outline.png",
    id: 413
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_the_flag_base_nobag.png",
    id: 414
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_jerrycan.png",
    id: 415
  },

   {
    img:"https://docs.fivem.net/blips/radar_level_inside.png",
    id: 417
  },
   {
    img:"https://docs.fivem.net/blips/radar_bounty_hit_inside.png",
    id: 418
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_the_usaflag.png",
    id: 419
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_the_usaflag_outline.png",
    id: 420
  },
   {
    img:"https://docs.fivem.net/blips/radar_tank.png",
    id: 421
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_heli.png",
    id: 422
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_plane.png",
    id: 423
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_jet.png",
    id: 424
  },
   {
    img:"https://docs.fivem.net/blips/radar_centre_stroke.png",
    id: 425
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_guncar.png",
    id: 426
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_boat.png",
    id: 427
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_heist.png",
    id: 428
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_1.png",
    id: 429
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_2.png",
    id: 430
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_3.png",
    id: 431
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_4.png",
    id: 432
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_5.png",
    id: 433
  },
   {
    img:"https://docs.fivem.net/blips/radar_temp_6.png",
    id: 434
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_stunt.png",
    id: 435
  },
   {
    img:"https://docs.fivem.net/blips/radar_hot_property.png",
    id: 436
  },
   {
    img:"https://docs.fivem.net/blips/radar_urbanwarfare_versus.png",
    id: 437
  },
   {
    img:"https://docs.fivem.net/blips/radar_king_of_the_castle.png",
    id: 438
  },
   {
    img:"https://docs.fivem.net/blips/radar_player_king.png",
    id: 439
  },
   {
    img:"https://docs.fivem.net/blips/radar_dead_drop.png",
    id: 440
  },
   {
    img:"https://docs.fivem.net/blips/radar_penned_in.png",
    id: 441
  },
   {
    img:"https://docs.fivem.net/blips/radar_beast.png",
    id: 442
  },
   {
    img:"https://docs.fivem.net/blips/radar_edge_pointer.png",
    id: 443
  },
   {
    img:"https://docs.fivem.net/blips/radar_edge_crosstheline.png",
    id: 444
  },
   {
    img:"https://docs.fivem.net/blips/radar_mp_lamar.png",
    id: 445
  },
   {
    img:"https://docs.fivem.net/blips/radar_bennys.png",
    id: 446
  },
   {
    img:"https://docs.fivem.net/blips/radar_corner_number_1.png",
    id: 447
  },

   {
    img:"https://docs.fivem.net/blips/radar_yacht.png",
    id: 455
  },
   {
    img:"https://docs.fivem.net/blips/radar_finders_keepers.png",
    id: 456
  },
   {
    img:"https://docs.fivem.net/blips/radar_assault_package.png",
    id: 457
  },
   {
    img:"https://docs.fivem.net/blips/radar_hunt_the_boss.png",
    id: 458
  },
   {
    img:"https://docs.fivem.net/blips/radar_sightseer.png",
    id: 459
  },
   {
    img:"https://docs.fivem.net/blips/radar_turreted_limo.png",
    id: 460
  },
   {
    img:"https://docs.fivem.net/blips/radar_belly_of_the_beast.png",
    id: 461
  },
   {
    img:"https://docs.fivem.net/blips/radar_yacht_location.png",
    id: 462
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_beast.png",
    id: 463
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_zoned.png",
    id: 464
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_random.png",
    id: 465
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_slow_time.png",
    id: 466
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_swap.png",
    id: 467
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_thermal.png",
    id: 468
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_weed.png",
    id: 469
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_railgun.png",
    id: 470
  },
   {
    img:"https://docs.fivem.net/blips/radar_seashark.png",
    id: 471
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_hidden.png",
    id: 472
  },
   {
    img:"https://docs.fivem.net/blips/radar_warehouse.png",
    id: 473
  },
   {
    img:"https://docs.fivem.net/blips/radar_warehouse_for_sale.png",
    id: 474
  },
   {
    img:"https://docs.fivem.net/blips/radar_office.png",
    id: 475
  },
   {
    img:"https://docs.fivem.net/blips/radar_office_for_sale.png",
    id: 476
  },
   {
    img:"https://docs.fivem.net/blips/radar_truck.png",
    id: 477
  },
   {
    img:"https://docs.fivem.net/blips/radar_contraband.png",
    id: 478
  },
   {
    img:"https://docs.fivem.net/blips/radar_trailer.png",
    id: 479
  },
   {
    img:"https://docs.fivem.net/blips/radar_vip.png",
    id: 480
  },
   {
    img:"https://docs.fivem.net/blips/radar_cargobob.png",
    id: 481
  },

   {
    img:"https://docs.fivem.net/blips/radar_pickup_accelerator.png",
    id: 483
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_ghost.png",
    id: 484
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_detonator.png",
    id: 485
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_bomb.png",
    id: 486
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_armoured.png",
    id: 487
  },
   {
    img:"https://docs.fivem.net/blips/radar_stunt.png",
    id: 488
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_lives.png",
    id: 489
  },
   {
    img:"https://docs.fivem.net/blips/radar_stunt_premium.png",
    id: 490
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary.png",
    id: 491
  },
   {
    img:"https://docs.fivem.net/blips/radar_biker_clubhouse.png",
    id: 492
  },
   {
    img:"https://docs.fivem.net/blips/radar_biker_caged_in.png",
    id: 493
  },
   {
    img:"https://docs.fivem.net/blips/radar_biker_turf_war.png",
    id: 494
  },
   {
    img:"https://docs.fivem.net/blips/radar_biker_joust.png",
    id: 495
  },
   {
    img:"https://docs.fivem.net/blips/radar_production_weed.png",
    id: 496
  },
   {
    img:"https://docs.fivem.net/blips/radar_production_crack.png",
    id: 497
  },
   {
    img:"https://docs.fivem.net/blips/radar_production_fake_id.png",
    id: 498
  },
   {
    img:"https://docs.fivem.net/blips/radar_production_meth.png",
    id: 499
  },
   {
    img:"https://docs.fivem.net/blips/radar_production_money.png",
    id: 500
  },
   {
    img:"https://docs.fivem.net/blips/radar_package.png",
    id: 501
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_1.png",
    id: 502
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_2.png",
    id: 503
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_3.png",
    id: 504
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_4.png",
    id: 505
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_5.png",
    id: 506
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_6.png",
    id: 507
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_7.png",
    id: 508
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_8.png",
    id: 509
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_9.png",
    id: 510
  },
   {
    img:"https://docs.fivem.net/blips/radar_capture_10.png",
    id: 511
  },
   {
    img:"https://docs.fivem.net/blips/radar_quad.png",
    id: 512
  },
   {
    img:"https://docs.fivem.net/blips/radar_bus.png",
    id: 513
  },
   {
    img:"https://docs.fivem.net/blips/radar_drugs_package.png",
    id: 514
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_jump.png",
    id: 515
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_4.png",
    id: 516
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_8.png",
    id: 517
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_10.png",
    id: 518
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_12.png",
    id: 519
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_16.png",
    id: 520
  },
   {
    img:"https://docs.fivem.net/blips/radar_laptop.png",
    id: 521
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_deadline.png",
    id: 522
  },
   {
    img:"https://docs.fivem.net/blips/radar_sports_car.png",
    id: 523
  },
   {
    img:"https://docs.fivem.net/blips/radar_warehouse_vehicle.png",
    id: 524
  },
   {
    img:"https://docs.fivem.net/blips/radar_reg_papers.png",
    id: 525
  },
   {
    img:"https://docs.fivem.net/blips/radar_police_station_dropoff.png",
    id: 526
  },
   {
    img:"https://docs.fivem.net/blips/radar_junkyard.png",
    id: 527
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_1.png",
    id: 528
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_2.png",
    id: 529
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_3.png",
    id: 530
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_4.png",
    id: 531
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_5.png",
    id: 532
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_6.png",
    id: 533
  },
   {
    img:"https://docs.fivem.net/blips/radar_ex_vech_7.png",
    id: 534
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_a.png",
    id: 535
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_b.png",
    id: 536
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_c.png",
    id: 537
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_d.png",
    id: 538
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_e.png",
    id: 539
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_f.png",
    id: 540
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_g.png",
    id: 541
  },
   {
    img:"https://docs.fivem.net/blips/radar_target_h.png",
    id: 542
  },
   {
    img:"https://docs.fivem.net/blips/radar_jugg.png",
    id: 543
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_repair.png",
    id: 544
  },
   {
    img:"https://docs.fivem.net/blips/radar_steeringwheel.png",
    id: 545
  },
   {
    img:"https://docs.fivem.net/blips/radar_trophy.png",
    id: 546
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_rocket_boost.png",
    id: 547
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_homing_rocket.png",
    id: 548
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_machinegun.png",
    id: 549
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_parachute.png",
    id: 550
  },

   {
    img:"https://docs.fivem.net/blips/radar_pickup_time_10.png",
    id: 552
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_time_15.png",
    id: 553
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_time_20.png",
    id: 554
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_time_30.png",
    id: 555
  },
   {
    img:"https://docs.fivem.net/blips/radar_supplies.png",
    id: 556
  },
   {
    img:"https://docs.fivem.net/blips/radar_property_bunker.png",
    id: 557
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_1.png",
    id: 558
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_2.png",
    id: 559
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_3.png",
    id: 560
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_4.png",
    id: 561
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_5.png",
    id: 562
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_wvm_6.png",
    id: 563
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_covert_ops.png",
    id: 564
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_bunker.png",
    id: 565
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_moc_upgrade.png",
    id: 566
  },
   {
    img:"https://docs.fivem.net/blips/radar_gr_w_upgrade.png",
    id: 567
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_cargo.png",
    id: 568
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_hangar.png",
    id: 569
  },
   {
    img:"https://docs.fivem.net/blips/radar_tf_checkpoint.png",
    id: 570
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_tf.png",
    id: 571
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_wp1.png",
    id: 572
  },

   {
    img:"https://docs.fivem.net/blips/radar_sm_wp3.png",
    id: 574
  },

   {
    img:"https://docs.fivem.net/blips/radar_sm_wp5.png",
    id: 576
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_wp6.png",
    id: 577
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_wp7.png",
    id: 578
  },
   {
    img:"https://docs.fivem.net/blips/radar_sm_wp8.png",
    id: 579
  },

   {
    img:"https://docs.fivem.net/blips/radar_sm_wp10.png",
    id: 581
  },

   {
    img:"https://docs.fivem.net/blips/radar_sm_wp12.png",
    id: 583
  },


   {
    img:"https://docs.fivem.net/blips/radar_nhp_bag.png",
    id: 586
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_chest.png",
    id: 587
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_orbit.png",
    id: 588
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_veh1.png",
    id: 589
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_base.png",
    id: 590
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_overlay.png",
    id: 591
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_turret.png",
    id: 592
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_mg_firewall.png",
    id: 593
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_mg_node.png",
    id: 594
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp1.png",
    id: 595
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp2.png",
    id: 596
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp3.png",
    id: 597
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp4.png",
    id: 598
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp5.png",
    id: 599
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp6.png",
    id: 600
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp7.png",
    id: 601
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp8.png",
    id: 602
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_wp9.png",
    id: 603
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_cctv.png",
    id: 604
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_starterpack.png",
    id: 605
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_turret_console.png",
    id: 606
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_mg_mir_rotate.png",
    id: 607
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_mg_mir_static.png",
    id: 608
  },
   {
    img:"https://docs.fivem.net/blips/radar_nhp_mg_proxy.png",
    id: 609
  },
   {
    img:"https://docs.fivem.net/blips/radar_acsr_race_target.png",
    id: 610
  },
   {
    img:"https://docs.fivem.net/blips/radar_acsr_race_hotring.png",
    id: 611
  },
   {
    img:"https://docs.fivem.net/blips/radar_acsr_wp1.png",
    id: 612
  },
   {
    img:"https://docs.fivem.net/blips/radar_acsr_wp2.png",
    id: 613
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_club_property.png",
    id: 614
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_cargo.png",
    id: 615
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_truck.png",
    id: 616
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_hack_jewel.png",
    id: 617
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_hack_gold.png",
    id: 618
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_keypad.png",
    id: 619
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_hack_target.png",
    id: 620
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_dtb_health.png",
    id: 621
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_dtb_blast_increase.png",
    id: 622
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_dtb_blast_decrease.png",
    id: 623
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_dtb_bomb_increase.png",
    id: 624
  },
   {
    img:"https://docs.fivem.net/blips/radar_pickup_dtb_bomb_decrease.png",
    id: 625
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_rival_club.png",
    id: 626
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_drone.png",
    id: 627
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_cash_reg.png",
    id: 628
  },
   {
    img:"https://docs.fivem.net/blips/radar_cctv.png",
    id: 629
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_assassinate.png",
    id: 630
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_pbus.png",
    id: 631
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp1.png",
    id: 632
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp2.png",
    id: 633
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp3.png",
    id: 634
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp4.png",
    id: 635
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp5.png",
    id: 636
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp6.png",
    id: 637
  },
   {
    img:"https://docs.fivem.net/blips/radar_blimp_2.png",
    id: 638
  },
   {
    img:"https://docs.fivem.net/blips/radar_oppressor_2.png",
    id: 639
  },
   {
    img:"https://docs.fivem.net/blips/radar_bat_wp7.png",
    id: 640
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_series.png",
    id: 641
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_premium.png",
    id: 642
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_workshop.png",
    id: 643
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_wars.png",
    id: 644
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_turret.png",
    id: 645
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_rc_car.png",
    id: 646
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_rc_workshop.png",
    id: 647
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_fire.png",
    id: 648
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_flip.png",
    id: 649
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_sea.png",
    id: 650
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_turn.png",
    id: 651
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_pit.png",
    id: 652
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_mine.png",
    id: 653
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_bomb.png",
    id: 654
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_wall.png",
    id: 655
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_brd.png",
    id: 656
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_trap_sbrd.png",
    id: 657
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_bruiser.png",
    id: 658
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_brutus.png",
    id: 659
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_cerberus.png",
    id: 660
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_deathbike.png",
    id: 661
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_dominator.png",
    id: 662
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_impaler.png",
    id: 663
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_imperator.png",
    id: 664
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_issi.png",
    id: 665
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_sasquatch.png",
    id: 666
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_scarab.png",
    id: 667
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_slamvan.png",
    id: 668
  },
   {
    img:"https://docs.fivem.net/blips/radar_arena_zr380.png",
    id: 669
  },
   {
    img:"https://docs.fivem.net/blips/radar_ap.png",
    id: 670
  },
   {
    img:"https://docs.fivem.net/blips/radar_comic_store.png",
    id: 671
  },
   {
    img:"https://docs.fivem.net/blips/radar_cop_car.png",
    id: 672
  },
   {
    img:"https://docs.fivem.net/blips/radar_rc_time_trials.png",
    id: 673
  },
   {
    img:"https://docs.fivem.net/blips/radar_king_of_the_hill.png",
    id: 674
  },
   {
    img:"https://docs.fivem.net/blips/radar_king_of_the_hill_teams.png",
    id: 675
  },
   {
    img:"https://docs.fivem.net/blips/radar_rucksack.png",
    id: 676
  },
   {
    img:"https://docs.fivem.net/blips/radar_shipping_container.png",
    id: 677
  },
   {
    img:"https://docs.fivem.net/blips/radar_agatha.png",
    id: 678
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino.png",
    id: 679
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino_table_games.png",
    id: 680
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino_wheel.png",
    id: 681
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino_concierge.png",
    id: 682
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino_chips.png",
    id: 683
  },
   {
    img:"https://docs.fivem.net/blips/radar_casino_horse_racing.png",
    id: 684
  },
   {
    img:"https://docs.fivem.net/blips/radar_adversary_featured.png",
    id: 685
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_1.png",
    id: 686
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_2.png",
    id: 687
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_3.png",
    id: 688
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_4.png",
    id: 689
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_5.png",
    id: 690
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_6.png",
    id: 691
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_7.png",
    id: 692
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_8.png",
    id: 693
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_9.png",
    id: 694
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_10.png",
    id: 695
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_11.png",
    id: 696
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_12.png",
    id: 697
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_13.png",
    id: 698
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_14.png",
    id: 699
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_15.png",
    id: 700
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_16.png",
    id: 701
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_17.png",
    id: 702
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_18.png",
    id: 703
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_19.png",
    id: 704
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_20.png",
    id: 705
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_21.png",
    id: 706
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_22.png",
    id: 707
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_23.png",
    id: 708
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_24.png",
    id: 709
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_25.png",
    id: 710
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_26.png",
    id: 711
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_27.png",
    id: 712
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_28.png",
    id: 713
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_29.png",
    id: 714
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_30.png",
    id: 715
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_31.png",
    id: 716
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_32.png",
    id: 717
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_33.png",
    id: 718
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_34.png",
    id: 719
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_35.png",
    id: 720
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_36.png",
    id: 721
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_0.png",
    id: 722
  },
   {
    img:"https://docs.fivem.net/blips/radar_roulette_00.png",
    id: 723
  },
   {
    img:"https://docs.fivem.net/blips/radar_limo.png",
    id: 724
  },
   {
    img:"https://docs.fivem.net/blips/radar_weapon_alien.png",
    id: 725
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_open_wheel.png",
    id: 726
  },
   {
    img:"https://docs.fivem.net/blips/radar_rappel.png",
    id: 727
  },
   {
    img:"https://docs.fivem.net/blips/radar_swap_car.png",
    id: 728
  },
   {
    img:"https://docs.fivem.net/blips/radar_scuba_gear.png",
    id: 729
  },
   {
    img:"https://docs.fivem.net/blips/radar_cpanel_1.png",
    id: 730
  },
   {
    img:"https://docs.fivem.net/blips/radar_cpanel_2.png",
    id: 731
  },
   {
    img:"https://docs.fivem.net/blips/radar_cpanel_3.png",
    id: 732
  },
   {
    img:"https://docs.fivem.net/blips/radar_cpanel_4.png",
    id: 733
  },
   {
    img:"https://docs.fivem.net/blips/radar_snow_truck.png",
    id: 734
  },
   {
    img:"https://docs.fivem.net/blips/radar_buggy_1.png",
    id: 735
  },
   {
    img:"https://docs.fivem.net/blips/radar_buggy_2.png",
    id: 736
  },
   {
    img:"https://docs.fivem.net/blips/radar_zhaba.png",
    id: 737
  },
   {
    img:"https://docs.fivem.net/blips/radar_gerald.png",
    id: 738
  },
   {
    img:"https://docs.fivem.net/blips/radar_ron.png",
    id: 739
  },
   {
    img:"https://docs.fivem.net/blips/radar_arcade.png",
    id: 740
  },
   {
    img:"https://docs.fivem.net/blips/radar_drone_controls.png",
    id: 741
  },
   {
    img:"https://docs.fivem.net/blips/radar_rc_tank.png",
    id: 742
  },
   {
    img:"https://docs.fivem.net/blips/radar_stairs.png",
    id: 743
  },
   {
    img:"https://docs.fivem.net/blips/radar_camera_2.png",
    id: 744
  },
   {
    img:"https://docs.fivem.net/blips/radar_winky.png",
    id: 745
  },
   {
    img:"https://docs.fivem.net/blips/radar_mini_sub.png",
    id: 746
  },
   {
    img:"https://docs.fivem.net/blips/radar_kart_retro.png",
    id: 747
  },
   {
    img:"https://docs.fivem.net/blips/radar_kart_modern.png",
    id: 748
  },
   {
    img:"https://docs.fivem.net/blips/radar_military_quad.png",
    id: 749
  },
   {
    img:"https://docs.fivem.net/blips/radar_military_truck.png",
    id: 750
  },
   {
    img:"https://docs.fivem.net/blips/radar_ship_wheel.png",
    id: 751
  },
   {
    img:"https://docs.fivem.net/blips/radar_ufo.png",
    id: 752
  },
   {
    img:"https://docs.fivem.net/blips/radar_seasparrow2.png",
    id: 753
  },
   {
    img:"https://docs.fivem.net/blips/radar_dinghy2.png",
    id: 754
  },
   {
    img:"https://docs.fivem.net/blips/radar_patrol_boat.png",
    id: 755
  },
   {
    img:"https://docs.fivem.net/blips/radar_retro_sports_car.png",
    id: 756
  },
   {
    img:"https://docs.fivem.net/blips/radar_squadee.png",
    id: 757
  },
   {
    img:"https://docs.fivem.net/blips/radar_folding_wing_jet.png",
    id: 758
  },
   {
    img:"https://docs.fivem.net/blips/radar_valkyrie2.png",
    id: 759
  },
   {
    img:"https://docs.fivem.net/blips/radar_sub2.png",
    id: 760
  },
   {
    img:"https://docs.fivem.net/blips/radar_bolt_cutters.png",
    id: 761
  },
   {
    img:"https://docs.fivem.net/blips/radar_rappel_gear.png",
    id: 762
  },
   {
    img:"https://docs.fivem.net/blips/radar_keycard.png",
    id: 763
  },
   {
    img:"https://docs.fivem.net/blips/radar_password.png",
    id: 764
  },
   {
    img:"https://docs.fivem.net/blips/radar_island_heist_prep.png",
    id: 765
  },
   {
    img:"https://docs.fivem.net/blips/radar_island_party.png",
    id: 766
  },
   {
    img:"https://docs.fivem.net/blips/radar_control_tower.png",
    id: 767
  },
   {
    img:"https://docs.fivem.net/blips/radar_underwater_gate.png",
    id: 768
  },
   {
    img:"https://docs.fivem.net/blips/radar_power_switch.png",
    id: 769
  },
   {
    img:"https://docs.fivem.net/blips/radar_compound_gate.png",
    id: 770
  },
   {
    img:"https://docs.fivem.net/blips/radar_rappel_point.png",
    id: 771
  },
   {
    img:"https://docs.fivem.net/blips/radar_keypad.png",
    id: 772
  },
   {
    img:"https://docs.fivem.net/blips/radar_sub_controls.png",
    id: 773
  },
   {
    img:"https://docs.fivem.net/blips/radar_sub_periscope.png",
    id: 774
  },
   {
    img:"https://docs.fivem.net/blips/radar_sub_missile.png",
    id: 775
  },
   {
    img:"https://docs.fivem.net/blips/radar_painting.png",
    id: 776
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_meet.png",
    id: 777
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_test_area.png",
    id: 778
  },
   {
    img:"https://docs.fivem.net/blips/radar_auto_shop_property.png",
    id: 779
  },
   {
    img:"https://docs.fivem.net/blips/radar_docks_export.png",
    id: 780
  },
   {
    img:"https://docs.fivem.net/blips/radar_prize_car.png",
    id: 781
  },
   {
    img:"https://docs.fivem.net/blips/radar_test_car.png",
    id: 782
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_robbery_board.png",
    id: 783
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_robbery_prep.png",
    id: 784
  },
   {
    img:"https://docs.fivem.net/blips/radar_street_race_series.png",
    id: 785
  },
   {
    img:"https://docs.fivem.net/blips/radar_pursuit_series.png",
    id: 786
  },
   {
    img:"https://docs.fivem.net/blips/radar_car_meet_organiser.png",
    id: 787
  },
   {
    img:"https://docs.fivem.net/blips/radar_securoserv.png",
    id: 788
  },
   {
    img:"https://docs.fivem.net/blips/radar_bounty_collectibles.png",
    id: 789
  },
   {
    img:"https://docs.fivem.net/blips/radar_movie_collectibles.png",
    id: 790
  },
   {
    img:"https://docs.fivem.net/blips/radar_trailer_ramp.png",
    id: 791
  },
   {
    img:"https://docs.fivem.net/blips/radar_race_organiser.png",
    id: 792
  },
   {
    img:"https://docs.fivem.net/blips/radar_chalkboard_list.png",
    id: 793
  },
   {
    img:"https://docs.fivem.net/blips/radar_export_vehicle.png",
    id: 794
  },
   {
    img:"https://docs.fivem.net/blips/radar_train.png",
    id: 795
  },

   {
    img:"https://docs.fivem.net/blips/radar_slamvan2.png",
    id: 799
  },
   {
    img:"https://docs.fivem.net/blips/radar_crusader.png",
    id: 800
  },
   {
    img:"https://docs.fivem.net/blips/radar_construction_outfit.png",
    id: 801
  },



   {
    img:"https://docs.fivem.net/blips/radar_featured_series.png",
    id: 809
  },
   {
    img:"https://docs.fivem.net/blips/radar_vehicle_for_sale.png",
    id: 810
  },
   {
    img:"https://docs.fivem.net/blips/radar_van_keys.png",
    id: 811
  },
   {
    img:"https://docs.fivem.net/blips/radar_suv_service.png",
    id: 812
  },
   {
    img:"https://docs.fivem.net/blips/radar_security_contract.png",
    id: 813
  },
   {
    img:"https://docs.fivem.net/blips/radar_safe.png",
    id: 814
  },
   {
    img:"https://docs.fivem.net/blips/radar_ped_r.png",
    id: 815
  },
   {
    img:"https://docs.fivem.net/blips/radar_ped_e.png",
    id: 816
  },
   {
    img:"https://docs.fivem.net/blips/radar_payphone.png",
    id: 817
  },
   {
    img:"https://docs.fivem.net/blips/radar_patriot3.png",
    id: 818
  },
   {
    img:"https://docs.fivem.net/blips/radar_music_studio.png",
    id: 819
  },
   {
    img:"https://docs.fivem.net/blips/radar_jubilee.png",
    id: 820
  },
   {
    img:"https://docs.fivem.net/blips/radar_granger2.png",
    id: 821
  },
   {
    img:"https://docs.fivem.net/blips/radar_explosive_charge.png",
    id: 822
  },
   {
    img:"https://docs.fivem.net/blips/radar_deity.png",
    id: 823
  },
   {
    img:"https://docs.fivem.net/blips/radar_d_champion.png",
    id: 824
  },
   {
    img:"https://docs.fivem.net/blips/radar_buffalo4.png",
    id: 825
  },
   {
    img:"https://docs.fivem.net/blips/radar_agency.png",
    id: 826
  },
];

export default ItemFields;

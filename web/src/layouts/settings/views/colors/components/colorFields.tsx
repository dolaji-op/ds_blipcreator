import { Box, Group, TextInput, Tooltip, ActionIcon, Modal } from '@mantine/core';
import { useState } from 'react';
import { TbSettings, TbTrash } from 'react-icons/tb';
import { useSetters, useStore } from '../../../../../store';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const colorFields: React.FC = () => {

  const sColor = useStore((state) => state.sColor);
  const scImg = useStore((state) => state.scImg);

  const setsColor = useSetters((setter) => setter.setsColor);
  const setsCImg = useSetters((setter) => setter.setsCImg);

  const handleImageClick = (img: string, id: number) => {
    setsColor(id === sColor ? null : id);
    setsCImg(img === scImg ? null : img);
  };

  return (
    <>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        {scImg && (
          <Box
            style={{
              width: 50,
              height: 50,
              borderRadius: 4,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: scImg,
              marginRight: 16,
            }}
          />
        )}
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <span>ID:</span>
          <TextInput
            placeholder="No image selected"
            disabled
            value={sColor != null ? sColor.toString() : ''}
            style={{ marginLeft: 8, background: 'none', boxShadow: 'none' }}
          />
        </Box>
      </Box>
      <ImageList cols={7}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() =>  handleImageClick(item.img, item.id)} >
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
              <div
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: item.img,
                  opacity: scImg === item.img ? 0.5 : 1,
                }}
              />
            </Box>
            {scImg === item.img && (
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
const itemData = [{
  img:"rgb(254, 254, 254)",
  id: 0
},
 {
  img:"rgb(224, 50, 50)",
  id: 1
},
 {
  img:"rgb(113, 203, 113)",
  id: 2
},

 {
  img:"rgb(93, 182, 229)",
  id: 3
},

 {
  img:"rgb(238, 198, 78)",
  id: 5
},

 {
  img:"rgb(194, 80, 80)",
  id: 6
},
 {
  img:"rgb(156, 110, 175)",
  id: 7
},
 {
  img:"rgb(254, 122, 195)",
  id: 8
},
 {
  img:"rgb(245, 157, 121)",
  id: 9
},
 {
  img:"rgb(177, 143, 131)",
  id: 10
},
 {
  img:"rgb(141, 206, 167)",
  id: 11
},
 {
  img:"rgb(112, 168, 174)",
  id: 12
},
 {
  img:"rgb(211, 209, 231)",
  id: 13
},
 {
  img:"rgb(143, 126, 152)",
  id: 14
},
 {
  img:"rgb(106, 196, 191)",
  id: 15
},
 {
  img:"rgb(213, 195, 152)",
  id: 16
},
 {
  img:"rgb(234, 142, 80)",
  id: 17
},
 {
  img:"rgb(151, 202, 233)",
  id: 18
},
 {
  img:"rgb(178, 98, 135)",
  id: 19
},
 {
  img:"rgb(143, 141, 121)",
  id: 20
},
 {
  img:"rgb(166, 117, 94)",
  id: 21
},
 {
  img:"rgb(175, 168, 168)",
  id: 22
},
 {
  img:"rgb(231, 141, 154)",
  id: 23
},
 {
  img:"rgb(187, 214, 91)",
  id: 24
},
 {
  img:"rgb(12, 123, 86)",
  id: 25
},


 {
  img:"rgb(205, 168, 12)",
  id: 28
},
 {
  img:"rgb(69, 97, 171)",
  id: 29
},
 {
  img:"rgb(41, 165, 184)",
  id: 30
},
 {
  img:"rgb(184, 155, 123)",
  id: 31
},
 {
  img:"rgb(200, 224, 254)",
  id: 32
},
 {
  img:"rgb(240, 240, 150)",
  id: 33
},

 {
  img:"rgb(249, 138, 138)",
  id: 35
},
 {
  img:"rgb(251, 238, 165)",
  id: 36
},

 {
  img:"rgb(44, 109, 184)",
  id: 38
},

 {
  img:"rgb(76, 76, 76)",
  id: 40
},


 {
  img:"rgb(175, 237, 174)",
  id: 43
},
 {
  img:"rgb(255, 167, 95)",
  id: 44
},
 {
  img:"rgb(241, 241, 241)",
  id: 45
},
 {
  img:"rgb(236, 240, 41)",
  id: 46
},
 {
  img:"rgb(255, 154, 24)",
  id: 47
},
 {
  img:"rgb(246, 68, 165)",
  id: 48
},
 {
  img:"rgb(224, 58, 58)",
  id: 49
},

 {
  img:"rgb(138, 109, 227)",
  id: 50
},
 {
  img:"rgb(255, 139, 92)",
  id: 51
},
 {
  img:"rgb(65, 108, 65)",
  id: 52
},
 {
  img:"rgb(179, 221, 243)",
  id: 53
},
 {
  img:"rgb(58, 100, 121)",
  id: 54
},

 {
  img:"rgb(132, 114, 50)",
  id: 56
},

 {
  img:"rgb(75, 65, 117)",
  id: 58
},
 {
  img:"rgb(225, 59, 59)",
  id: 59
},

 {
  img:"rgb(205, 63, 152)",
  id: 61
},
 {
  img:"rgb(207, 207, 207)",
  id: 62
},
 {
  img:"rgb(39, 106, 159)",
  id: 63
},
 {
  img:"rgb(216, 123, 27)",
  id: 64
},
 {
  img:"rgb(142, 131, 147)",
  id: 65
},





 {
  img:"rgb(121, 205, 121)",
  id: 69
},

 {
  img:"rgb(61, 61, 61)",
  id: 72
},



 {
  img:"rgb(120, 35, 35)",
  id: 76
},




 {
  img:"rgb(242, 164, 12)",
  id: 81
},
 {
  img:"rgb(164, 204, 170)",
  id: 82
},
 {
  img:"rgb(168, 84, 242)",
  id: 83
},

];


export default colorFields;

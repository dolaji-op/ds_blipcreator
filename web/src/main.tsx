import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { debugData } from './utils/debugData';
import { MantineProvider } from '@mantine/core';
import { customTheme } from './theme';
import { isEnvBrowser } from './utils/misc';
import { StoreState } from './store';
import { HashRouter } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';
import { BlipColumn } from './store/blips';

debugData<BlipColumn[]>([
  {
    action: 'updateBlipData',
    data: [
      {
        name: 'Blip name',
        ftimer: 5000,
        sColor: 0,
        Sprite: 0,
        SpriteImg: '',
        scImg: '',
        alpha: 255,
        scale: 1,
        id: 0,
        zone: 'Mission Row',
        groups: {
          ['police']: 0,
          ['ambulance']: 1,
        },
        items: 0,
        colors: 0,
        hideb: false,
        tickb: false,
        bflash: false,
        sRange: false,
        hideUi: false,
        outline: false,
      },
    ],
  },
]);

debugData(
  [
    {
      action: 'updateBlipData',
      data: {
        [0]: {
          name: 'Blip name',
          ftimer: 5000,
          scImg: '',
          sColor: 5000,
          Sprite: 0,
          SpriteImg: '',
          alpha: 255,
          scale: 1,
          id: 2,
          zone: 'Mission Row',
          groups: {
            ['police']: 0,
            ['ambulance']: 1,
          },
          items: 0,
          colors: 0,
          hideb: false,
          tickb: false,
          bflash: false,
          sRange: false,
          hideUi: false,
          outline: false,
        },

      },
    },
  ],
  3000
);

debugData(
  [
    {
      action: 'setVisible',
      data: undefined,
    },
  ],
  2000
);


if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={customTheme}>
      <ModalsProvider modalProps={{ transition: 'slide-up' }}>
        <HashRouter>
          <App />
        </HashRouter>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

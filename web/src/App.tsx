import { Box,Text, createStyles, Transition } from '@mantine/core';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useNuiEvent } from './hooks/useNuiEvent';
import { defaultState, StoreState, useSetters, useStore } from './store';
import Blips from './layouts/blips';
import Settings from './layouts/settings';
import { useVisibility } from './store/visibility';
import { useExitListener } from './hooks/useExitListener';
import { useBlips } from './store/blips';
import { BlipColumn } from './store/blips';
import { convertData } from './utils/convertData';

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    width: 700,
    height: 500,
    backgroundColor: theme.colors.dark[8],
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column', // Add this line
  },

  search: {
    width: '40%',
    transition: '300ms',
    '&:focus-within': {
      width: '50%',
    },
  },
}));

const App: React.FC = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);
  const blips = useBlips((state) => state.blips);
  const setBlips = useBlips((state) => state.setBlips);
  const navigate = useNavigate();




  useNuiEvent('setVisible', (data: number) => {
    setVisible(true);
    if (data === undefined) return navigate('/');
    for (let i = 0; i < blips.length; i++) {
      if (blips[i].id === data) {
        useStore.setState(convertData(blips[i]), true);
        navigate('/settings/general');
        break;
      }
    }
  });

  useNuiEvent('updateBlipData', (data: BlipColumn | number) => {
    // Blip id sent so delete the filter out the blip
    if (typeof data === 'number') return        setBlips(blips.filter((blip) => blip.id !== data));

    else {
      // Single blip sent so update the object
      if (data.hasOwnProperty('id')) {
        let index = blips.length;
        console.log(index)
        for (let i = 0; i < index; i++) {
          const blip = Object.values(blips)[i];
          if (blip.id == data.id) {
            index = i;
            break;
          }
        }
        return setBlips(Object.values({ ...blips, [index]: data } as BlipColumn[]));
      }
      // More than 1 blip sent - replace the object
      return setBlips(Object.values(data));
    }
  });

  useExitListener(setVisible);

  return (
    <Box className={classes.container}>
      <Transition transition="slide-up" mounted={visible}>
        {(style) => (
          <Box className={classes.main} style={style}>
            <Routes>

              <Route path="/" element={<Blips />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </Box>
        )}
      </Transition>
    </Box>
  );
};

export default App;

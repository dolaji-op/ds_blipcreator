import { Box, Stack, Tabs } from '@mantine/core';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TbSettings, TbBriefcase, TbBottle, TbBell, TbArrowBackUp, TbUser, TbLock } from 'react-icons/tb';
import General from './views/general';
import Groups from './views/groups';
import Items from './views/items';
import Colors from './views/colors';
import Submit from './Submit';
import { useStore } from '../../store';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>

      <Box sx={{ height: '100%', display: 'flex' }}>
        <Tabs
          orientation="vertical"
          color="blue"
          sx={{ height: '100%' }}
          value={location.pathname.substring(10)}
          onTabChange={(value) => navigate(`/settings/${value}`)}
        >
          <Tabs.List>
            <Tabs.Tab value={'back'} onClick={() => navigate('/')} icon={<TbArrowBackUp size={20} />}>
              Blips
            </Tabs.Tab>
            <Tabs.Tab value="general" icon={<TbSettings size={20} />}>
              General
            </Tabs.Tab>


            <Tabs.Tab value="items" icon={<TbBottle size={20} />}>
              Sprite
            </Tabs.Tab>
            <Tabs.Tab value="colors" icon={<TbBottle size={20} />}>
              Color
            </Tabs.Tab>

            <Tabs.Tab value="groups" icon={<TbBriefcase size={20} />}>
              Job
            </Tabs.Tab>


          </Tabs.List>
        </Tabs>
        <Stack p={16} sx={{ width: '100%' }} justify="space-between">
          <Routes>
            <Route path="/general" element={<General />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/items" element={<Items />} />
            <Route path="/colors" element={<Colors />} />
          </Routes>
          <Submit />
        </Stack>
      </Box>
    </>
  );
};

export default Settings;

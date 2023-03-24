import { Stack } from '@mantine/core';
import Header from './components/Header';
import BlipTable from './components/BlipTable';

const Blips: React.FC = () => {
  return (
    <Stack sx={{ height: '100%' }}>
      <Header />
      <BlipTable />
    </Stack>
  );
};

export default Blips;

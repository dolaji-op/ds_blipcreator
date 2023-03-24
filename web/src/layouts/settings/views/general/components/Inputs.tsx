import { Grid } from '@mantine/core';
import Input from './Input';
import { useStore, useSetters } from '../../../../../store';

const Inputs: React.FC = () => {

  const blipName = useStore((state) => state.name);
  const ftimer = useStore((state) => state.ftimer);


  const setBlipName = useSetters((setter) => setter.setName);
  const setftimer = useSetters((setter) => setter.setftimer);

  return (
    <>
      <Grid columns={2} sx={{ fontSize: 16 }}>
        <Input label="Blip name" type="text" value={blipName || ''} setValue={(value: string) => setBlipName(value)} />
        <Input label="Flash Timer" infoCircle="Time in mili seconds after which blip will be flashed" type="text" value={ftimer || ''} setValue={(value: number) => setftimer(value)} />

      </Grid>
    </>
  );
};

export default Inputs;

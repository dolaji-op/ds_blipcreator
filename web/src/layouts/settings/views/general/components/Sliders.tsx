import {Slider, Text, Flex, SimpleGrid } from '@mantine/core';
import { useStore, useSetters } from '../../../../../store';

const Sliders: React.FC = () => {
  const blipScale = useStore((state) => state.scale);
  const blipAlpha = useStore((state) => state.alpha);

  const setblipScale = useSetters((setter) => setter.setblipScale);
  const setblipAlpha = useSetters((setter) => setter.setblipAlpha);

  return (
    <>




      <SimpleGrid cols={2} pt={16}>

      <Flex direction="column" wrap="wrap">
        <Text size="sm">
          Blip Scale
        </Text>
        <Slider value={blipScale || 1} onChange={setblipScale} />
      </Flex>

      <Flex direction="column" wrap="wrap">
        <Text size="sm">
          Blip Opacity
        </Text>
        <Slider value={blipAlpha || 255} min={0} max={255} onChange={setblipAlpha} />
      </Flex>
        </SimpleGrid>
    </>
  );
};

export default Sliders;

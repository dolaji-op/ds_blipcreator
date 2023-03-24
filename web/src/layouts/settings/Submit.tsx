import { ActionIcon, Button, Center, Stack, Tooltip } from '@mantine/core';
import { useStore } from '../../store';
import { fetchNui } from '../../utils/fetchNui';
import { HiOutlineClipboardCheck } from 'react-icons/all';
import { useClipboard } from '../../store/clipboard';
import { useVisibility } from '../../store/visibility';

const Submit: React.FC = () => {
  const clipboard = useClipboard((state) => state.clipboard);
  const setVisible = useVisibility((state) => state.setVisible);

  const handleSubmit = () => {
    const data = { ...useStore.getState() };
    if (data.name === '') data.name = null;


    data.hideUi = data.hideUi || null;

    if (data.groups && data.groups.length > 0) {
      const groupsObj: { [key: string]: number } = {};

      for (let i = 0; i < data.groups.length; i++) {
        const groupField = data.groups[i];
        if (groupField.name && groupField.name !== '') groupsObj[groupField.name] = groupField.grade || 0;
      }

      // @ts-ignore
      data.groups = groupsObj;
    } // @ts-ignore
    else data.groups = null;



    setVisible(false);
    fetchNui('createBlip', data);
  };

  return (
    <Center>
      <Button color="blue" uppercase onClick={() => handleSubmit()} fullWidth>
        Confirm blip
      </Button>
      <Tooltip label={!clipboard ? 'No blip settings copied' : 'Apply copied settings'} withArrow arrowSize={10}>
        <ActionIcon
          variant="outline"
          disabled={!clipboard}
          size="lg"
          ml={16}
          sx={{ width: 36, height: 36 }}
          color="blue"
          onClick={() => {
            useStore.setState(
              {
                name: '',
                ftimer: clipboard.ftimer,
                Sprite: clipboard.Sprite,
                SpriteImg: clipboard.SpriteImg,
                sColor: clipboard.sColor,
                scImg: clipboard.scImg,
                scale: clipboard.scale,
                alpha: clipboard.alpha,
                items: clipboard.items,
                colors: clipboard.colors,
                groups: clipboard.groups,
                hideb: clipboard.hideb,
                tickb: clipboard.tickb,
                bflash: clipboard.bflash,
                sRange: clipboard.sRange,
                outline: clipboard.outline,
                hideUi: clipboard.hideUi,
              },
              true
            );
            fetchNui('notify', 'Settings applied');
          }}
        >
          <HiOutlineClipboardCheck size={20} />
        </ActionIcon>
      </Tooltip>
    </Center>
  );
};

export default Submit;

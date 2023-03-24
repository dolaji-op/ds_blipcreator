import create, { GetState, SetState } from 'zustand';

export type StringField = string | null | undefined;
export type NumberField = number | null | undefined;

export interface StoreState {
  name: StringField;
  ftimer: NumberField;
  scImg: StringField;
  Sprite: NumberField;
  SpriteImg: StringField;
  scale: NumberField;
  sColor: NumberField;
  alpha: NumberField;
  items: NumberField;
  colors:NumberField;
  groups: { name: StringField; grade: NumberField }[];
  hideb: boolean | null;
  tickb: boolean | null;
  hideUi: boolean | null;
  bflash: boolean | null;
  sRange: boolean | null;
  outline: boolean | null;
}

interface StateSetters {

  setName: (value: StoreState['name']) => void;
  setblipScale: (value: StoreState['scale']) => void;
  setblipAlpha: (value: StoreState['alpha']) => void;
  setftimer: (value: StoreState['ftimer']) => void;
  setSprite: (value: StoreState['Sprite']) => void;
  setSpriteImg: (value: StoreState['SpriteImg']) => void;
  setsCImg: (value: StoreState['scImg']) => void;
  setsColor: (value: StoreState['sColor']) => void;
  setItems: (value: StoreState['items']) => void;
  setColors: (value: StoreState['colors']) => void;
  setGroups: (fn: (state: StoreState['groups']) => StoreState['groups']) => void;
  toggleCheckbox: (type: 'tickb' | 'outline' | 'hideb' | 'bflash' | 'sRange' | 'hideUi') => void;
}

export const useStore = create<StoreState>(() => ({
  name: '',
  ftimer: 50000,
  sColor: 0,
  scImg: '',
  Sprite: 0,
  SpriteImg: '',
  alpha: 255,
  scale: 1,
  items: 0,
  colors:0,
  groups: [{ name: '', grade: undefined }],
  hideb: false,
  tickb: false,
  bflash: false,
  hideUi: false,
  sRange: false,
  outline: false,
}));

export const defaultState = useStore.getState();

export const useSetters = create<StateSetters>((set: SetState<StateSetters>, get: GetState<StateSetters>) => ({
  setName: (value) => useStore.setState({ name: value }),
  setftimer: (value: StoreState['ftimer']) => useStore.setState({ ftimer: value }),
  setSprite: (value: StoreState['Sprite']) => useStore.setState({ Sprite: value }),
  setSpriteImg: (value: StoreState['SpriteImg']) => useStore.setState({ SpriteImg: value }),
  setsColor: (value: StoreState['sColor']) => useStore.setState({ sColor: value }),
  setsCImg: (value: StoreState['scImg']) => useStore.setState({ scImg: value }),
  setblipAlpha: (value: StoreState['alpha']) => useStore.setState({ alpha: value }),
  setblipScale: (value: StoreState['scale']) => useStore.setState({ scale: value }),
  // @ts-ignore
  toggleCheckbox: (type) => useStore.setState((state) => ({ [type]: !state[type] })),
  setItems: (value) => useStore.setState({ items: value }),
  setColors: (value) => useStore.setState({ colors: value }),
  setGroups: (fn) =>
    useStore.setState(({ groups: groupFields }) => ({
      groups: fn(groupFields),
    })),
}));

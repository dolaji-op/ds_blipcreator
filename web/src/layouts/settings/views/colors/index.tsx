import { useEffect } from 'react';
import { useSetters } from '../../../../store';
import ColorFields from './components/colorFields';
import Layout from '../../Layout';

const Colors: React.FC = () => {
  const setcolorFields = useSetters((setter) => setter.setColors);

  // Clear empty item fields when leaving the page


  return (
    <ColorFields/>
  );
};

export default Colors;

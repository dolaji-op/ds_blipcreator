import { useEffect } from 'react';
import { useSetters } from '../../../../store';
import ItemFields from './components/ItemFields';
import Layout from '../../Layout';

const Items: React.FC = () => {
  const setItemFields = useSetters((setter) => setter.setItems);

  // Clear empty item fields when leaving the page


  return (
    <ItemFields />
  );
};

export default Items;

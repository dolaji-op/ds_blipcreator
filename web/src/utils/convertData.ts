import { BlipColumn } from '../store/blips';
import { StoreState } from '../store';

// Converts groups data into array format
export const convertData = (data: BlipColumn) => {
  let newGroupsData: { name: string; grade: number }[] = [];
  if (data.groups) {
    const blipGroupsData = Object.entries(data.groups);
    for (let i = 0; i < blipGroupsData.length; i++) {
      const groupObj = blipGroupsData[i];
      newGroupsData[i] = { name: groupObj[0], grade: groupObj[1] };
    }
  }
  return {
    ...data,
    groups: [...newGroupsData],
    items: data.items,
  } as StoreState;
};

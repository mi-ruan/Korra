export const OPEN_DROP_DOWN = 'OPEN_DROP_DOWN';
export const CLOSE_DROP_DOWN = 'CLOSE_DROP_DOWN';

export const openDropDown = (dropDown) => {
  return {
    type: OPEN_DROP_DOWN,
    dropDown,
  };
};

export const closeDropDown = () => {
  return {
    type: CLOSE_DROP_DOWN,
  };
};

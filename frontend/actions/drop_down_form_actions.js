export const OPEN_DROP_DOWN_FORM = 'OPEN_DROP_DOWN_FORM';
export const CLOSE_DROP_DOWN_FORM = 'CLOSE_DROP_DOWN_FORM';

export const openDropDownForm = (dropDownForm, id) => {
  return {
    type: OPEN_DROP_DOWN_FORM,
    dropDownForm,
    id
  };
};

export const closeDropDownForm = () => {
  return {
    type: CLOSE_DROP_DOWN_FORM,
  };
};

export const OPEN_DROP_DOWN_FORM = 'OPEN_DROP_DOWN_FORM';
export const CLOSE_DROP_DOWN_FORM = 'CLOSE_DROP_DOWN_FORM';

export const openDropDownForm = (dropDownForm, questionId, answerId) => {
  return {
    type: OPEN_DROP_DOWN_FORM,
    dropDownForm,
    questionId,
    answerId,
  };
};

export const closeDropDownForm = () => {
  return {
    type: CLOSE_DROP_DOWN_FORM,
  };
};

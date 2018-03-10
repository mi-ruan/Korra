import React from 'react';
import { closeDropDownForm } from '../../actions/drop_down_form_actions';
import { connect } from 'react-redux';
import AnswerFormContainer from '../answers/answer_form_container';

function DropDownForm({dropDownForm, closeDropDownForm, dropDownFormId}) {
  if (!dropDownForm) {
    return null;
  }
  let component;
  switch (dropDownForm) {
    case 'answerForm':
      component = <AnswerFormContainer question={{id: dropDownFormId}} />;
      break;
    default:
      return null;
  }
  return (
    <div className="dropDownForm-background" onClick={closeDropDownForm}>
      <div className="dropDownForm-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dropDownForm: state.ui.dropDownForm.type,
    dropDownFormId: state.ui.dropDownForm.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropDownForm: () => dispatch(closeDropDownForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownForm);

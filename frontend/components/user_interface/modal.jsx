import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import QuestionCreateContainer from '../questions/question_create_container';
import QuestionUpdateContainer from '../questions/question_update_container';

function Modal({modal, closeModal, modalId}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createForm':
      component = <QuestionCreateContainer />;
      break;
    case 'updateForm':
      component = <QuestionUpdateContainer question={{id: modalId}} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.type,
    modalId: state.ui.modal.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

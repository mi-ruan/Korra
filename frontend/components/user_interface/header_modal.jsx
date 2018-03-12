import React from 'react';
import { closeHeaderModal } from '../../actions/header_modal_actions';
import { connect } from 'react-redux';
import QuestionSearchContainer from '../main/question_search_container';

function HeaderModal({HeaderModal, closeHeaderModal, HeaderModalId}) {
  if (!HeaderModal) {
    return null;
  }
  let component;
  switch (HeaderModal) {
    case 'questionSearchForm':
      component = <QuestionSearchContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="header-modal-background" onClick={closeHeaderModal}>
      <div className="header-modal-child" onClick={e => e.stopPropagation()}>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    HeaderModal: state.ui.headerModal.type,
    HeaderModalId: state.ui.headerModal.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeHeaderModal: () => dispatch(closeHeaderModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderModal);

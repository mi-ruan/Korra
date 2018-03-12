export const OPEN_HEADER_MODAL = 'OPEN_HEADER_MODAL';
export const CLOSE_HEADER_MODAL = 'CLOSE_HEADER_MODAL';

export const openHeaderModal = (headerModal, id) => {
  return {
    type: OPEN_HEADER_MODAL,
    headerModal,
    id
  };
};

export const closeHeaderModal = () => {
  return {
    type: CLOSE_HEADER_MODAL
  };
};

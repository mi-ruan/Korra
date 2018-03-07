import React from 'react';

const errorsForm = (props) => {
  let errors = "";
  if (props.errors.session){
    errors = props.errors.session.map((error,idx) => {
      return (<li key={idx}>{error}</li>);
    });
  }
  return (
    <ul className="session-errors">
      {errors}
    </ul>
  );
};

export default errorsForm;

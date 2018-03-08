import React from 'react';

const QuestionItem = ({question}) => {
  return(
    <div>
      <h3>{question.title}</h3>
    </div>
  );
};

export default QuestionItem;

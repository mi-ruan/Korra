import React from 'react';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form>
          <textarea placeholder="Write your answer"></textarea>
        </form>
      </div>
    );
  }

}

export default AnswerForm;

import React from 'react';

class AnswerForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form className="answer-form">
          <textarea className="answer-form-text" placeholder="Write your answer"></textarea>
          <div onClick={this.props.closeDropDownForm} className="closeX">X</div>
        </form>
      </div>
    );
  }
}





export default AnswerForm;

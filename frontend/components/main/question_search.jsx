import React from 'react';
import {openHeaderModal} from '../../actions/header_modal_actions';

class QuestionSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    }
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }

  render() {
    return(
      <input type="text" className="question-search"
        placeholder={`\uD83D\uDD0D Search Quora`}
        onClick={() => dispatch(openHeaderModal('questionSearchForm'))}>
      </input>
    )
  }

}

export default QuestionSearch;

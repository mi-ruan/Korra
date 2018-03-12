import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {openHeaderModal} from '../../actions/header_modal_actions';

class QuestionSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  matches() {
    const matches = [];
    if (this.state.title.length === 0) {
      return this.props.questions;
    }
    this.props.questions.forEach(question => {
      let sub = name.slice(0, this.state.title.length);
      if (sub.toLowerCase() === this.state.title.toLowerCase()) {
        matches.push(question);
      }
    });
    if (matches.length === 0) {
      matches.push('No matches');
    }
    return matches;
  }

  selectQuestion(e) {
    let question = e.currentTarget.innerText;
    this.setState({'title': question});
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.Question}>{result.title}</li>
      );
    });
    return(
      <div className="question-search-div">
        <form>
          <input type="text" className="question-search"
            placeholder={`\uD83D\uDD0D Search Quora`}
            onClick={() => dispatch(openHeaderModal('questionSearchForm'))}
            onChange={this.updateTitle}
            value={this.state.title} />
        </form>
        <ul className="question-search-list">
          <ReactCSSTransitionGroup
            transitionName='auto'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
          {results}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }

}

export default QuestionSearch;

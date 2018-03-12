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
      return matches;
    }
    this.props.questions.forEach(question => {
      if (question.title.toLowerCase().includes(this.state.title.toLowerCase())) {
        matches.push(question.title);
      }
    });
    if (matches.length === 0) {
      matches.push('No Results');
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
        <li key={i} onClick={this.Question} className='question-search-item'>{result}</li>
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
            transitionEnterTimeout={100}
            transitionLeaveTimeout={100}>
          {results}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }

}

export default QuestionSearch;

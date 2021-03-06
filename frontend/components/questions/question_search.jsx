import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {openHeaderModal} from '../../actions/header_modal_actions';
import {Link, withRouter} from 'react-router-dom';


class QuestionSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.matches = this.matches.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  updateTitle(e){
    if (!this.props.modalOn){
      dispatch(openHeaderModal('questionSearchForm', 1));
    }
    this.setState({title: e.target.value});
  }

  matches() {
    const matches = [];
    if (this.state.title.length === 0) {
      return matches;
    }
    const questions = this.props.questions;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].title.toLowerCase().includes(this.state.title.toLowerCase())) {
        matches.push(questions[i]);
      }
      if (matches.length > 10) break;
    }
    if (matches.length === 0) {
      matches.push({title: 'No Results'});
    }
    return matches;
  }

  handleKeyPress(e) {
    if(e.key === "Enter"){
      e.preventDefault();
      const matchers = this.matches();
      if (matchers.length === 0 || matchers[0].title === 'No Results') {
        this.resetSearch();
      } else {
        const question = matchers[0];
        this.resetSearch();
        this.props.history.push(`/questions/${question.id}`);
      }
    }
  }

  handleDropDown(){
    if(this.props.modalOn) {
      let results = this.matches().map((result, i) => {
        if (result.id) {
          return (
            <Link to={`/questions/${result.id}`} key={i}  className='question-search-item'
              onClick={this.resetSearch}>{result.title}</Link>
          );
        } else {
          return <li key='result' className='question-search-item-no'>{result.title}</li>;
        }
      });
      return (
        <ReactCSSTransitionGroup
          transitionName='auto'
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}>
        {results}
        </ReactCSSTransitionGroup>
      )
    }
  }

  selectQuestion(e) {
    let question = e.currentTarget.innerText;
    this.setState({'title': question});
  }

  resetSearch() {
    this.props.closeHeaderModal();
    this.setState({title: ''});
    this.matches();
  }

  render() {

    return(
      <div className="question-search-div">
        <i className="fas fa-search"></i>
        <form onKeyPress={this.handleKeyPress}>
          <input type="text" className="question-search"
            placeholder={`Search Quora`}
            onClick={() => dispatch(openHeaderModal('questionSearchForm', 1))}
            onChange={this.updateTitle}
            value={this.state.title} />
        </form>
        <ul className="question-search-list">
          {this.handleDropDown()}
        </ul>
      </div>
    );
  }
}


export default withRouter(QuestionSearch);

![Korra](https://github.com/mi-ruan/Korra/blob/master/wiki/korra_logo.PNG)  
[live-Website](https://korrakorra.herokuapp.com/)

<h5>
Korra is a question and answer website that allows users to interact with each other by answering other users' questions. Users can post any questions they have on the websites and fellow users who know the answers can respond. Questions can also be tagged with topics and sorted by questions. New Topics can be created if the topic does not exist in the database. This allows users to sift through related questions. Users can also search for questions in the database if they are interested in a particular question.
</h5>

## Technologies used
  #### 1. Ruby on Rails for backend
  #### 2. HTML
  #### 3. CSS
  #### 4. Javascript
*  ####  React
*  #### Redux
*  #### ReactQuill for text editor
*  #### ReactMoment for date-time


### Two Feature Examples

####  DropDownAnswerForm
![DropDownAnswerForm](http://recordit.co/rnQDaJ4suw)  
  <h5>
  This feature allows a form to appear directly below for the user to answer a specific question. When the answer is submitted, the form disappears and is replaced by the newly created answer.</h5>
  <h5>
  This feature looked simple initially, but was challenging understanding where to make the switch from answer form to the actual answer in the code. Another challenge was to drop for the correct question or answer being addressed. When the code was written initially, all forms were being dropped at the same time.
  </h5>
  <h5>
  The feature was solved by building a dropdown switch through the react-redux cycle that maintain the on and off state of the dropdown. The dropdown switch was also given question id and answer id tags that allowed the code to recognize what questions or answers is being answered or modified. The code was then placed in an if-else conditional to check whether display the form or answers depending on the dropdown switch coming from the frontend storage.  
  </h5>
####  Taggings
![Taggings](http://recordit.co/8kNaJH8bbf)  

  <h5>
  This feature allows user to add topics to their questions. Topics already on the website are searched to find matching ones; and if the inputted topic is a new one, it is added to the database. Topics can also be "untagged" from the question and is no longer associated.
  </h5>
  <h5>
  This feature is particular hard because the maintenance of the association between the topics and questions. Topics can have many questions and question can have many topics. Additionally, new topics are created if they do not exist and are then immediately connected with the question.
  </h5>
  <h5>
  This feature was solved using a specific backend code that allowed a new object to be created if it was not found in the database. With careful manipulation of the join table association between questions and topics allowed correct syncing and desyncing of the two entities. This was also then maintain in the frontend state using react-redux cycle by multiple reducers for each slice being affected by the tagging associations.
  </h5>  


##  Code Snippets  


  ####  QuestionReducer
  ```
  const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_QUESTIONS:
        return action.questions;
      case RECEIVE_QUESTION:
        return merge({}, state, {[action.question.id]: action.question});
      case REMOVE_QUESTION:
        const newState = merge({}, state);
        delete newState[action.questionId];
        return newState;
      case REMOVE_ANSWER:
        const newStateAnswer = merge({}, state);
        const arr = newStateAnswer[action.questionId].answerIds;
        const index = arr.indexOf(action.answerId);
        arr.splice(index,1);
        return newStateAnswer;
      case RECEIVE_TOPIC:
        return merge({}, state, action.questions);
      case RECEIVE_TAGGING:
        const newStateTag = merge({}, state);
        const arrTag = newStateTag[action.questionId].topicIds;
        arrTag.push(action.topicId);
        return newStateTag;
      case REMOVE_TAGGING:
        const newStateRT = merge({}, state);
        const arrRT = newStateRT[action.questionId].topicIds;
        const indexRT = arrRT.indexOf(action.topicId);
        arrRT.splice(indexRT,1);
        return newStateRT;
      default:
        return state;
    }
  };
```
####  Creating and Updating the Answer Form
```
handleSubmit(e){
  e.preventDefault();
  if(this.props.formType === "createForm"){
    this.props.submitAction(this.state, this.state.question_id)
    .then(() => this.props.fetchQuestions())
    .then(this.props.closeDropDownForm);
  } else{
    this.props.submitAction(this.state).then(this.props.closeDropDownForm);
  }
}
```

import React from 'react';
import FAQForm from '../components/FAQForm';

class QuestionFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleTextChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit(event) {
    debugger;
    event.preventDefault();
    let formPayload = {
      question: this.state.question,
      answer: this.state.answer
    }
    debugger;
    this.props.handleSubmit(formPayload)
    debugger;
    this.handleClearForm(event)
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {
    return(
      <div>
        <form className="callout" id="FAQ-form" onSubmit={this.handleFormSubmit}>
          Add a new Question/Answer!
          <FAQForm
            key="question"
            name="question"
            label="Question:"
            value={this.state.question}
            handlerFunction={this.handleTextChange}
          />
          <FAQForm
            key="answer"
            name="answer"
            label="Answer:"
            value={this.state.answer}
            handlerFunction={this.handleTextChange}
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
            <button className="button" onClick={this.handleClearForm}>Clear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionFormContainer;

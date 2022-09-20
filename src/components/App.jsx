import React, { Component } from 'react'
import Section from './Section/Section'
import FeedbackOptions from './Feedback/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from '../components/Notification/Notification'

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
  
  makeFeedback = (event) => {
        const { name } = event.target;
    
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }))
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
     }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const result = (good / total) * 100
        return Number(result.toFixed(0));
    }
  render() {
    const { good, neutral, bad } = this.state; 
    const total = this.countTotalFeedback();
    const positivProcentage = this.countPositiveFeedbackPercentage();
  return (
    <>
      <Section title={"Pleas leave feedback"}>
        <FeedbackOptions onLeaveFeedback={this.makeFeedback} />
        {!total ? <Notification /> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivProcentage={positivProcentage} />}   
        </Section>
      </>
    )
  };
};

export default App;
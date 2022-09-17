import React from 'react'
import PropTypes from 'prop-types';
import './Feedback.css'

const FeedbackOptions = ({onLeaveFeedback}) => (
        <>
            <button name="good" className="feedbackButton" onClick={onLeaveFeedback}>Good</button>
            <button name="neutral" className="feedbackButton" onClick={onLeaveFeedback}>Neutral</button>
            <button name="bad" className="feedbackButton" onClick={onLeaveFeedback}>Bad</button>
        </>
)
    
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
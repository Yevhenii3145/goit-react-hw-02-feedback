import React from 'react'
import PropTypes from 'prop-types';
import styles from './Feedback.module.css'

const FeedbackOptions = ({onLeaveFeedback}) => (
        <div className={styles.buttonsBox}>
            <button name="good" className={styles.feedbackButton} onClick={onLeaveFeedback}>Good</button>
            <button name="neutral" className={styles.feedbackButton} onClick={onLeaveFeedback}>Neutral</button>
            <button name="bad" className={styles.feedbackButton} onClick={onLeaveFeedback}>Bad</button>
        </div>
)
    
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
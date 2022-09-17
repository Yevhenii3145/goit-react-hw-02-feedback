import React from 'react'
import PropTypes from 'prop-types';
import './Feedback.css'

const Statistics = ({ good, neutral, bad, total, positivProcentage }) => (
    <>
    <h3>Statistics</h3>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivProcentage}%</p>
    </>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivProcentage: PropTypes.number.isRequired,
}

export default Statistics;

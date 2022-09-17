import React from 'react'
import PropTypes from 'prop-types';
import './Feedback.css'

const Section = ({ title, children }) => (
        <section>
        <h2>{title}</h2> 
        {children}
        </section>
    )
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape())
}

export default Section;
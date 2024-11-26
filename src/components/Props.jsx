import React from 'react'

const Props = ({ buttonText, blueText, className }) => {
    return (
        <div className={`${className} fs-1 fw-bold text-primary`}>{buttonText} <span className='text-danger'>{blueText}</span></div>
    )
}

export default Props
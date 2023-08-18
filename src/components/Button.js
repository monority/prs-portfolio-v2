import React from 'react'

const Button = ({ action, children, className, arialabel }) => {
    return (
        <>
            <button className={className} onClick={action} aria-label={arialabel}>
                {children}
            </button>
        </>
    )
}

export default Button
import React from 'react'

function ErrorComponent({ isError }) {
    if (isError === true) {
        return (
            <p >Please enter value</p>
        )
    }
    else {
        return (
            <p></p>
        )
    }

}

export default ErrorComponent

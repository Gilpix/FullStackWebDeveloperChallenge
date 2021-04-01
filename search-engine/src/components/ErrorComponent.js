import React from 'react'

function ErrorComponent({ isError }) {
    console.log("HHH " + isError)
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

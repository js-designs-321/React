import React from 'react'

const Hello = () => {
    return React.createElement(
        'div',
        {className : 'dummyClass' , id : 'tempID'},
        React.createElement('h1',null,'Without JSX')
    )
}

export default Hello
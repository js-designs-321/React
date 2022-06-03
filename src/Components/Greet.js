import React from 'react';

const Greet = (props) => {
    return (
        <div>
        <h1> Name : {props.name} , Profile : {props.profile} </h1>
        {props.children}
        </div>
    )
}

export default Greet
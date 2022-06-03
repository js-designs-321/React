import React from 'react';

// const Greet = ({name,profile,children}) => {
//     return (
//         <div>
//         <h1> Name : {name} , Profile : {profile} </h1>
//         <p> {children} </p>
//         {/* {props.children} */}
//         </div>
//     )
// }

const Greet = (props) => {
    const {name, profile,children} = props
    return (
        <div>
        <h1> Name : {name} , Profile : {profile} </h1>
        <p> {children} </p>
        </div>
    )
}

export default Greet
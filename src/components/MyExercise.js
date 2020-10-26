import React from "react";


function MyExercise(props) {
    return (
        <div className="field">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id}></input>
        </div>
    )
}

export default MyExercise;

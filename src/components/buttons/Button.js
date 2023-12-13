import React from "react";



// const eventHandler = () => alert("Edit button") 

function Button(props) {
    function eventHandler(){
        alert(props.message)
    }
    return (
        <>
        <button
            className="btn"
            onClick={eventHandler}
            style={props.style}>
            {props.title}
        </button>
        </>
  );
}

export default Button;

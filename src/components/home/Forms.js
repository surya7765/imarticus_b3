import React from 'react'

function Forms() {
    function HandleInputEvent(event){
        console.log(event.target.value);
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        alert("Form submitted successfully");
    }
  return (
    <div>
        <form onSubmit={handleSubmission}>
            <input onChange={HandleInputEvent} type="text" placeholder="Start typing..." required/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Forms
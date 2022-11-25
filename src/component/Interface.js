import React, { useState } from 'react'

const Interface = () => {

    const[question1, setQuestion1]= useState("");
    const[question2, setQuestion2]= useState("");
    const[question3, setQuestion3]= useState("");
    const[question4, setQuestion4]= useState("");

    const handleClick = async (e) => {
        e.preventDefault ();
        const response = await fetch ("https://talkk7devcms.talkk.in/api/v1/apiai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token" : "NjFkZDU1Mjk1MzA2YTEyODk3ZWFiN2Zh"
              },
              body : JSON.stringify()
          })
        
    }

    const handleChange = (e) => {
        setQuestion1({ ...question1, [e.target.question1]: e.target.value })
      }
      const onChange2 = (e) => {
        setQuestion2({ ...question2, [e.target.question2]: e.target.value })
      }
      const onChange3= (e) => {
        setQuestion3({ ...question3, [e.target.question3]: e.target.value })
      }
      const onChange4= (e) => {
        setQuestion4({ ...question4, [e.target.question4]: e.target.value })
      }

  return (
    <div>

<form className="row g-3 m-2">
  
  <div className="col-6 my-4">
    <label for="text" className="form-label">Title </label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter the title"/>
  </div>
  <div className="col-6 my-4">
    <label for="text" className="form-label">Topic</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  
  <div className="card col-6 mx-3" style ={{ "width" : "748 px" }}>
  <div className="col-my-6 ">
    <label for="text" className="form-label" >Question 1</label>
    <input type="text" className="form-control" id="question1" value={question1.question1} onClick= {handleClick} onChange={handleChange} />
  </div>
  <div className="col-my-6" >
    <label for="text" className="form-label" >Question 2</label>
    <input type="text" className="form-control" id="question2" value={question2.question2}  onClick= {handleClick} onChange= {onChange2} />
  </div>
  <div className="col-my-6">
    <label for="text" className="form-label">Question 3</label>
    <input type="text" className="form-control" id="question3" value={question3.question3}  onClick= {handleClick} onChange= {onChange3} />
  </div>
  <div className="col-my-6">
    <label for="inputCity" className="form-label">Question 4</label>
    <input type="text" className="form-control" id="question4" value= {question4.question4} onClick= {handleClick} onChange= {onChange4} />
  </div>

  </div>

</form>

      
    </div>
  )
}

export default Interface





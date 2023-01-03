import React, { useState } from 'react'
import axios, { isCancel, AxiosError } from 'axios';



const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
  return (
      <div>
          {toDoList.map(todo => {
              return (
                  <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
              )
          })}
          <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
      </div>
  );
};
const Interface = () => {



  let data = [];
  const[question1, setQuestion1]= useState("");
  const[question2, setQuestion2]= useState("");
  const[question3, setQuestion3]= useState("");
  const[question4, setQuestion4]= useState("");
  const[questions, setQuestions]= useState({"question":[question1,question2,question3,question4]});
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }


  const handleClick = async (e) => {
        // e.preventDefault ();
        // const response = await fetch ("https://talkk7devcms.talkk.in/api/v1/apiai", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "auth-token" : "NjFkZDU1Mjk1MzA2YTEyODk3ZWFiN2Zh"
        //       },
        //       body : JSON.stringify()
        //   })

//         var url = "https://talkk7devcms.talkk.in/api/v1/apiai";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader("Authorization", "Bearer NjFkZDU1Mjk1MzA2YTEyODk3ZWFiN2Zh");
// xhr.setRequestHeader("Content-Type", "application/json");
// // xhr.setRequestHeader("Content-Length", "0");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};

//       xhr.send();

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer NjFkZDU1Mjk1MzA2YTEyODk3ZWFiN2Zh.'
      }
      const questionData = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer NjFkZDU1Mjk1MzA2YTEyODk3ZWFiN2Zh.'
      }
axios.post('https://talkk7devcms.talkk.in/api/v1/apiai', {
questionData
} ,{ headers: headers})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
console.log(questions);

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
    <select id="inputState" className="form-select">
      <option value="" selected disabled>Choose...</option>
      <option value="button">Button</option>
      <option value="text">Text</option>
      <option value="file_media">File / Media</option>
    </select>
  </div>

  <div className="card col-6 mx-3" style ={{ "width" : "748 px" }}>
  <div className="col-my-6 ">
    <label for="text" className="form-label" >Question 1</label>
    <input type="text" className="form-control" id="question1" value={question1.question1} onChange={handleChange} />
  </div>
  <div className="col-my-6" >
    <label for="text" className="form-label" >Question 2</label>
    <input type="text" className="form-control" id="question2" value={question2.question2}  onChange= {onChange2} />
  </div>
  <div className="col-my-6">
    <label for="text" className="form-label">Question 3</label>
    <input type="text" className="form-control" id="question3" value={question3.question3}  onChange= {onChange3} />
  </div>
  <div className="col-my-6">
    <label for="inputCity" className="form-label">Question 4</label>
    <input type="text" className="form-control" id="question4" value={question4.question4} onChange= {onChange4} />
  </div>

  </div>
<button onClick={(e)=>handleClick(e)}>Save</button>
</form>


    </div>
  )
}

export default Interface





import React, { useState } from 'react'

const App = () => {
// Input State
  const [task, setTask]= useState('');


  // Array of task Lists
  const [taskList, setList ]= useState([]);


  // Input Handler
  const handleInput=(e)=>{
    setTask(e.target.value)
  }

  

  // Adding Task Handler
  function handleAddTask(){
    if (task.trim()) { // Preventing Empty Inputs
      setList([...taskList, {
        id: Date.now(), 
        title: task, 
        status:false  
      }]); // Crucial to Be Passed as an array

      setTask(''); // Clearing the Input
    }
  }

  // Handling Enter Key Press
  function handleKeyPress(e){
    if (e.key == 'Enter') {
      handleAddTask();
    }
  }
  

  // Handle Toggle Task Status
  function handleToggle(id){
    setList(taskList.map((task)=> task.id==id? {...task, status: !task.status}: task))}
  
  // Delete Handler

  function handleDelete(id){
    setList(taskList.filter(task=> task.id !==id))
  }




  return (
    <div>
      <input type="text" value={task} onChange={handleInput} onKeyDown={handleKeyPress} placeholder='Your task....'/>
      <button onClick={handleAddTask} >Add Task</button>
      <div className="list">
        <ul>
          {
          taskList.length==0?
          <b>No tasks Yet</b>:
          taskList.map(
            (task)=><li key={task.id} className={ task.status? 'completed': ''} ><input type="checkbox" checked={task.status} onChange={()=>handleToggle(task.id)} /><span style={{textDecoration: task.status? 'line-through': 'none'}} >{task.title}</span><button onClick={()=>handleDelete(task.id)} style={{color: 'red', backgroundColor: 'whitesmoke'}} >Remove</button></li>
            )}
        </ul>
        
      </div>
    </div>
  )
}

export default App
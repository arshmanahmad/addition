import React from 'react';
import {useState} from 'react';
import './Input.css'

const Input = ({valueGetter}) => {
 const[tasks,setTasks] = useState('');

 const handleChange = (event) =>{
  const inputTask = event.target.value;
  setTasks(inputTask)
  valueGetter(inputTask);
  console.log(inputTask);
 }

  return (
    <div>
          <input required className='class-box' type="text" onChange={handleChange} placeholder='Allot tasks'  value={tasks} />
    </div>
  )
}

export default Input;
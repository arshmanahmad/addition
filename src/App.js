import React from 'react';
import Input from './components/Input';
import './components/App.css';
import DropDown from './components/DropDown';
import TableShow from './components/TableShow';
import {useState} from 'react';

const App = () => {
 const[inputValue,setInputValue]=useState([]);
 const [dropDownValue,setDropDownValue] = useState('');
 const [input,setInput] = useState('');
 const inputGetter = (value) =>{
  setInput(value);
}
 const selectGetter = (value) =>{
  setDropDownValue(value);
// }

// const handleClick = () =>{
//   const updatedArr = [
//     ...inputValue,
//     {
//       tasks : input,
//       category : dropDownValue,
//     }
//   ]
//   setInputValue(updatedArr);
//   console.log(updatedArr);
// }

  return (
    <div className='main-container'> 
          <h1>Allot tasks to different levels:</h1>
        <div className="container">
          <Input valueGetter={inputGetter} />
          <DropDown valueGetter={selectGetter}  />
          <button onClick={handleClick} type='submit'>Submit</button>
        </div>
          <TableShow inputValue={inputValue} />
    </div>
  )
}

export default App;
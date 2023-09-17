import React from 'react'
import {useState} from 'react';
import './DropDown.css';

const DropDown = ({valueGetter}) => {
  const [selectValue,setSelectValue] = useState('Ceo');
  const handleChange = (event) =>{
    setSelectValue(event.target.value)
  }
  valueGetter(selectValue);

  
  const options = [
    { value : "Ceo" , text : "Ceo"},
    { value : "Senior developer" , text : "Senior developer"},
    { value : "Junior developer" , text : "Junior developer"},
    { value : "Internee" , text : "Internee"},
    { value : "Office boy" , text : "Office boy"},

  ];        
 
  return (
    <div>
      <select value={selectValue} onChange={handleChange}>
      {options.map(item => {
      return (<option key={item.value} value={item.value}>{item.text}</option>);
       })}
      </select>
    </div>
  )
}

export default DropDown;

{/* <option value="Ceo">Ceo</option>
<option value="Team Leader">Team Leader</option>
<option value="Senior Developer">Senior Developer</option>
<option value="Junior Developer">Junior Developer</option>
<option value="Internee">Internee</option>
<option value="Office Boy">Office Boy</option> */}





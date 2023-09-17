import React from 'react'
import './TableShow.css'
const TableShow = ({inputValue}) => {

  const selectRecord= inputValue.map((select,index)=>{

    return(
          <tr key={index}>
             <td>
              {select.tasks}
             </td>
             <td>{select.category}</td>
          </tr>
    )
  });
  return(
    <div>

      <table>
        <thead>
          <th>Task</th>
          <th>Level</th>
        </thead>
        <tbody>{selectRecord}</tbody>
      </table>
    </div>
  )
};

export default TableShow


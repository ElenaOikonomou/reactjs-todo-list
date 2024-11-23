import React from 'react'

export default function TodoCard({children}) {
  return (
   <li className='todoItem' >
        <div className='actionsContainer'> 
             {children}    
             <i className="fa-solid fa-pen"></i>
             <i className="fa-solid fa-trash-can"></i>
         </div>
   </li>
        

    ) 
}

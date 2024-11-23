import React from 'react'

export default function TodoCard({children,  handleDeleteTodo, index}) {
  return (
   <li className='todoItem' >
    {children}
        <div className='actionsContainer'>
            <button>
                
             <i className="fa-solid fa-pen"></i>
             </button> 
             <button onClick={()=>{
                handleDeleteTodo(index)
             }}>
             <i className="fa-solid fa-trash-can"></i>
             </button>
         </div>
   </li>
        

    ) 
}

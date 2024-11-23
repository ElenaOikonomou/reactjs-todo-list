import {useState} from 'react'
import React from 'react'

export default function TodoInput({handleAddTodos}) {
    const [todoValue, setTodoValue] = useState("")
   
  return (
    <header>
        <input value={todoValue} placeholder='Enter todo...' onChange={(e)=>{
            setTodoValue(e.target.value)
        }}/>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}

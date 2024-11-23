import React from 'react'

export default function TodoList() {

    let todos=['Go to the gym',
        'eat your veggies',
        'supermarket'
    ]
  return (
    <ul className='main'>{todos.map((todo, todoIndex)=>{
        return (<li className='todoItem' key={todoIndex}>{todo}</li>

        )

    })}</ul>
  )
}

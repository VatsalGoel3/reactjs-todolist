import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        'Brush your teeth',
        'Eat healthy and go to gym',
        'Prepare for exams and interview'
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoindex) => {
            return (
                <TodoCard key={todoindex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}

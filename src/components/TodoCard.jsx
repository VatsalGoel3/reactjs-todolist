import React from 'react'

export default function TodoCard(props) {
    const {children} = props
  return (
    <li className='todoItem' >
        {children}
        <div className='actionsContainer'>
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-regular fa-trash-can"></i>
        </div>
    </li>  
  )
}


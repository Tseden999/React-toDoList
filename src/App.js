import React, { useState } from 'react'
import "./App.css"
import ToDoList from './components/ToDoList'
import ToDo from './components/ToDo';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }

  const deleteList = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1)
    setListTodo([...newlistTodo])
  }
  return (
    <div className='inputFields'>
      <div className='todoList'>
        <ToDoList addList={addList} />
        <h1 className='app-heading'>ToDo</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <ToDo key={i} index={i} item={listItem} deleteList={deleteList} />
          )
        })}
      </div>
    </div>
  )
}

export default App

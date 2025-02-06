import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem(
      'todos', 
      JSON.stringify({
        todos: newList,
      })
    );
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) return;
    
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <Router>
      <Routes>
        {/* Protected Route (Dashboard with Todo List) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard>
                <TodoInput
                  todoValue={todoValue}
                  setTodoValue={setTodoValue}
                  handleAddTodos={handleAddTodos}
                />
                <TodoList
                  handleDeleteTodo={handleDeleteTodo}
                  handleEditTodo={handleEditTodo}
                  todos={todos}
                />
              </Dashboard>
            </PrivateRoute>
          }
        />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App

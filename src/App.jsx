import React, { useState } from 'react'
import todo from "../src/assets/todo.png"
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from './features/Todo/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const App = () => {
  const [task, settask] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.tasks);



  function handleAddTodo() {

    const todoObj = {
      id: nanoid(),
      todo: task,
      done: false,

    };
    dispatch(addTodo(todoObj));
    settask("");
  }


  return (

    <div className="bg-slate-600">
      <div className='flex justify-center items-center'>
        <img src={todo} alt="Todo Image" className='w-40' />
      </div>
      <h1 className="text-center text-3xl font-bold text-yellow-300">
        The Best Todo Application
      </h1>

      <div className="flex justify-center items-center py-10 gap-8">
        <input
          type="text"
          placeholder="Enter Todo"
          className="px-10 py-4 rounded-md hover:bg-blue-200"
          onChange={(e) => settask(e.target.value)}
          value={task}
        />
        <button
          className="border border-purple-500 px-10 py-4 rounded-md font-bold text-purple-400
      hover:bg-slate-500"
          onClick={() => handleAddTodo()}
        >
          Add To do
        </button>
      </div>
      <div className="flex justify-between px-32 w-full min-h-[70vh]">
        <div className="flex flex-col gap-4 w-1/2">

          {todos.map((todo) => {

            if (!todo.done) {
              return (
                <TodoComponent
                  key={todo.id}
                  title={todo.todo}
                  id={todo.id}
                  done={todo.done}
                />
              );
            }
          })}
        </div>

        <div className="w-[2px] bg-slate-400 mx-5"></div>
        <div className="flex flex-col gap-4 w-1/2">
          {todos.map((todo) => {

            if (todo.done) {
              return (
                <TodoComponent
                  key={todo.id}
                  title={todo.todo}
                  id={todo.id}
                  done={todo.done}
                />
              );

            }


          })}
        </div>
      </div>
    </div>


  )

  function TodoComponent({ title, id, done }) {

    const dispatch = useDispatch();

    function handleDeleteTodo(id) {

      dispatch(deleteTodo(id));

    }

    function handledoneTodo(id) {
      dispatch(doneTodo(id));
    }

    return (
      <div className="flex gap-8 text-slate-50 items-center">
        <p>{title}</p>
        <button
          className= {`border ${ 
            done 
            ? " border-pink-400 text-pink-400" 
            : " border-blue-500  text-blue-500"
          } px-4 py-2 rounded-md font-bold
           hover:bg-slate-500`}
          onClick={() => handledoneTodo(id)}
        >
          {done ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button
          className="border border-pink-400 px-4 py-2 rounded-md font-bold text-pink-400
  hover:bg-slate-500"
          onClick={() => handleDeleteTodo(id)}
        >
          Delete
        </button>
      </div>
    )
  }

}

export default App

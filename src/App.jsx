import React, { useState } from 'react'
import todo from "../src/assets/todo.png"
import { useDispatch } from 'react-redux'
import { addTodo } from './features/Todo/todoSlice';

const App = () => {
  const [tsak, settask]=useState("");

  const dispatch = useDispatch();

function handleAddTodo(){

  console.log("Handling add function");
  //{id: nanoid(), todo: "learn something new today", done:false}
const todoObj= {id: nanoid(), todo: tsak, done:false};
  dispatch(addTodo(todoObj));
}


  return (

    <div className="bg-slate-600">
      <div className='flex justify-center items-center'>
        <img src={todo} alt="Todo Image" className='w-40'/>
      </div>
      <h1 className="text-center text-3xl font-bold text-yellow-300">
      The Best Todo Application
      </h1>
      
    <div className="flex justify-center items-center py-10 gap-8">
      <input
        type="text"
        placeholder="Enter Todo"
        className="px-10 py-4 rounded-md hover:bg-blue-200"
        onChange={(e)=> settask(e.target.value)}
      />
      <button
        className="border border-purple-500 px-10 py-4 rounded-md font-bold text-purple-400
      hover:bg-slate-500"
      onClick={()=> handleAddTodo()}
      > 
        Add To do
      </button>
    </div>
    <div className="flex justify-between px-40 min-h-[70vh]">
      <div className="flex flex-col">
        <div className="flex gap-8 text-slate-50 items-center">
          <p>Learn React js and redux </p>
          <button
            className="border border-blue-500 px-4 py-2 rounded-md font-bold text-blue-500
      hover:bg-slate-500"
          >
            Done
          </button>
          <button
            className="border border-pink-400 px-4 py-2 rounded-md font-bold text-pink-400
      hover:bg-slate-500"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="w-[2px] border-yellow-100 border-dotted bg-slate-400"></div>
      <div className="flex flex-col">
        <div className="flex gap-8 text-slate-50 items-center">
          <p>Learn HTML, CSS and Js</p>
          <button
            className="border border-blue-500 px-4 py-2 rounded-md font-bold text-blue-500
      hover:bg-slate-500"
          >
            Incomplete
          </button>
          <button
            className="border border-pink-400 px-4 py-2 rounded-md font-bold text-pink-400
      hover:bg-slate-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default App

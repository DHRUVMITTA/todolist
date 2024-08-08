"use client"
import React, { useDeferredValue, useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const deleteHandler=(i)=>{let copyTask=[...mainTask]; copyTask.splice(i,1);setmainTask(copyTask)};
  let renderTask=<h2>No Task Available</h2>
if(mainTask.length > 0){
  renderTask=mainTask.map((t,i) => {  return (
    <li key={i} className='flex items-center justify-between'>
    <div className='flex justify-between mb-5 w-2/3 p-3'>
        <h3 className='text-2xl font-semibold'>{t.title}</h3> 
        <p className='text-lg font-semibold overflow-hidden max-w-xs break-words '>{t.des}</p>
      </div>
      <button onClick={(i)=>{deleteHandler(i)}}className='bg-red-400 rounded-md text-white p-4 hover:scale-1.1 hover:bg-red-500'>Delete</button>
    </li>
      );});
}
  const submitHandler = (e)=>{e.preventDefault(); setmainTask([...mainTask,{title,des}]);setdes("") ;settitle("");;
  }
  return (
<>
<h1 className='bg-black text-zinc-200 text-center font-black text-5xl'>ToDo List</h1>
<form onSubmit={submitHandler} className='flex space-x-40'>
  <input type="text"className='text-2xl py-3 p-2 m-4 aspect-auto rounded-md border-2 border-rose-600'  required placeholder='Enter Task' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
  <input type="text"className='text-2xl py-3 p-2 m-4 aspect-auto rounded-md border-2 border-rose-600' required placeholder='Enter Description' value={des} onChange={(e)=>{setdes(e.target.value)}} />
  <button className='m-4 mx-4 bg-orange-300 px-10 py-3 text-2xl rounded-md border-2 border-rose-600 hover:scale-110 hover:border-green-600 hover:bg-green-300'>ADD</button>

</form>
<hr />
<div className='bg-zinc-200 p-8 '>
    {renderTask}
  </div>
</>
  )
}

export default page

import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({ title, details })
    settask(copyTask)
    settitle('')
    setdetails('')
  }

  const deletenote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }



  return (
    <div className='bg-black  h-screen lg:flex text-white'>

      <form onSubmit={(e) => { submitHandler(e) }}
        className='flex lg:w-1/2 items-start p-10 flex-col gap-4'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* first input for handling */}

        <input type="text"
          placeholder='Enter Task  Heading'
          className='outline-none w-full px-5 py-2 border-2 rounded'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <textarea type="text"
          placeholder='Enter The Details'
          className='outline-none w-full px-5 py-2 h-32 border-2 rounded flex items-start flex-row resize-none'
          value={details}
          onChange={(e) => {
            setdetails(e.target.value)
          }}
        />

        <button className='w-full bg-white active:scale-99 text-black px-5 py-2 rounded cursor-pointer'>Add Details</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex flex-col justify-between items-startrelative h-52 w-40 rounded-2xl bg-cover text-black px-4 pt-8 pb-3 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight font-bold text-xl text-center'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deletenote(idx);
              }} className='w-full bg-red-500 text-white rounded cursor-pointer active:scale-98 py-1 text-xs font-bold'>Delete</button>
            </div>
          })}



        </div>
      </div>

    </div>
  )
}

export default App

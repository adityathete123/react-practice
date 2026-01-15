import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')

  const submithandler = (e) => {
    //by this method , details will submitted but the page will not reload 
    e.preventDefault() 
    console.log('form submitted by', title);
    settitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='enter your Name' value={title} onChange={
          (e) => {
            settitle(e.target.value)
          }

        } />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

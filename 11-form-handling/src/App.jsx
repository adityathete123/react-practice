import React from 'react'

const App = () => {

const submithandler=(e)=>{
  //by this method , details will submitted but the page will not reload 
  e.preventDefault()
  console.log('form submitted');
  
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

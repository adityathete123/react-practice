import React, { use, useState } from 'react'

const App = () => {

  const [a, seta] = useState({ user: 'aditya', age: 20 })

  const btnClicked = () => {
    const newNum = { ...a };
    newNum.user = 'harsh'
    seta(newNum)
  }

  const [a1, seta1] = useState(10)

  const btnClicked1 = () => {
    // this is known as the batch update
    seta1(prev => (prev + 1))
    seta1(prev => (prev + 1))
    seta1(prev => (prev + 1))
  }


  return (
    <div className='btn'>
      <h1>{a1}</h1>
      <button onClick={btnClicked1}>Click</button>
    </div>
  )
}

export default App

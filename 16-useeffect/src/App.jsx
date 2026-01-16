import React, { useEffect, useState } from 'react'

const App = () => {

  const achanging = () => {
    console.log('a is changing');
  }

  const bchanging = () => {
    console.log('b is changing');
  }

  const [a, seta] = useState(0)
  const [b, setb] = useState(10)

  //when we want to run the events simultaneously but the event should get stored in he stack and then execute in sequence then we useeffect.
  //for example : we want to display the 10 images on the first page and then remaining on the other page then we can use the useeffect.

  useEffect(function () {
    bchanging();
  }, [b])

  useEffect(function () {
    achanging();
  }, [a])

  return (
    <div>

      <h2>A is {a}</h2>
      <button onClick={() => {seta(a + 1)}}>Chage A</button>

      <h2>B is {b}</h2>
      <button onClick={() => {setb(b - 1)}}>Change B</button>
      
    </div>
  )
}

export default App

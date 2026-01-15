  import React, { useState } from 'react'

  // when we want to change the value of the single variable without harming another, then we use Usestate.
  const App = () => {
    
  const [first, setfirst] = useState(0)

  function change(){
    setfirst(first-1)
  }
    return (
      <div>
        <button onClick={change}>Increase this button on click {first}</button>
      </div>
    )
  }

  export default App

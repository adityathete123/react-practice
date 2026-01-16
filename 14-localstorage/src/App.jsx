import React from 'react'

const App = () => {



const user1={
  username:'aditya',
  age:28,
  proffesion:'army'
}
// to store the data in the local storage , we always have to send the data in the form of the string , for that we use the JSON.stringify method
localStorage.setItem('user1',JSON.stringify(user1))

const details=JSON.parse(localStorage.getItem('user1'))
console.log(details);



  return (
    <div>
      app
    </div>
  )
}

export default App

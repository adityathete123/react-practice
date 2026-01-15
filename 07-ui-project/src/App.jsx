
import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2'
const App = () => {

  const user=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'Maroon',
      tag :'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661741416773-8751741873a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'RoyalBlue',
      tag :'Underserved'

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661719962300-6963d242ca50?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'', 
      color:'Chocolate',
      tag :'Underbanked' 
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1675272833807-fb6d8293210c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      intro:'', 
      color:'DarkSeaGreen',
      tag :'Undertraning' 
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661749996118-799eff98b27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8',
      intro:'',
      color:'lightseagreen',
      tag:'Satisfied'
    }
  ]

  return (
    <div>
      <Page1 users={user}/>
      <Page2/>
    </div>
  )
}

export default App

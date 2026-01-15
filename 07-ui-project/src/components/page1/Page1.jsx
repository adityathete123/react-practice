import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'
const Page1 = (props) => {
  console.log(props);
  
  return (
    <div className='bg-white h-screen w-full'>
       <Navbar/>
       <PageContent users={props.users}/>
    </div>
  )
}

export default Page1

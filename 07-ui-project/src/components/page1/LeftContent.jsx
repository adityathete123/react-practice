import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'
const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3  mb-10'>
            
           <Herotext/>
           <Arrow/>

        </div>
    )
}

export default LeftContent

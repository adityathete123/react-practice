import React from 'react'
import RightcardContent from './RightcardContent'

const RightCard = (props) => {
  return (
    <div  className='h-full w-60 overflow-hidden relative bg-red-500 rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
     <RightcardContent tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard

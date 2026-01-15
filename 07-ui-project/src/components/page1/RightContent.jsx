
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right'className='rounded-3xl h-full p-6 w-2/3  mb-10 flex flex-nowrap gap-10 overflow-x-auto'>
     {props.users.map(function(elem , idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
     })}
      
    </div>
  )
}

export default RightContent

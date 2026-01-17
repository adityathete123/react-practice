import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
const App = () => {


  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)


  const getdata = async () => {
    // axios.post('https://picsum.photos/v2/list?page=2&limit=100',{usrname:'aditya',pass:'aditya123'}) this is use for send the data,patch is use to update and delete for deleting
    const repsponse = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)

    setuserdata(repsponse.data)
  }

  useEffect(function () {
    getdata();
  }, [index])

  let printuserdata = <h3 className=' absolute text-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {

      return <div key={idx}>
        <Cards elem={elem} />
      </div>

    })
  }




  return (
    <div className='bg-black overflow-auto h-screen text-white p-4 '>

      <div className=' flex flex-wrap gap-4 p-4'>
        {printuserdata}
      </div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className='bg-amber-300 cursor-pointer text-sm active:scale-98 text-black px-4 py-2 rounded font-semibold'
          onClick={() => {
            if (index > 1) { setindex(index - 1), setuserdata([]) }
          }}>
          Prev
        </button>
        <h1>Page {index}</h1>
        <button className='bg-amber-300 cursor-pointer text-sm active:scale-98 text-black px-4 py-2 rounded font-semibold'
          onClick={() => {
            setindex(index + 1),
              setuserdata([])
          }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App

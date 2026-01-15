import React from 'react'





const Cards = (prop) => {

    console.log(prop.company);
  return (
    <div className="card">

          <div>
            <div className="top">
              <img src={prop.logo} alt="" />
              <button>Save<i className="fa-solid fa-bookmark"></i></button>
            </div>
            <div className="center">
              <h3>{prop.company} <span>{prop.datepost}</span></h3>
              <h2>{prop.post}</h2>
              <div className='tag'>
                <h4>{prop.tag1}</h4>
                <h4>{prop.tag2}</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>{prop.payhour}</h3>
              <p>{prop.location}</p>
            </div>
            <button>Apply Now</button>
          </div>

        </div>
  )
}

export default Cards

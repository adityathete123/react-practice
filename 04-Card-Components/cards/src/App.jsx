import React from 'react'

import Cards from './components/Cards'
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&P=0&h=180",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$35/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&P=0&h=180",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.jh5IgrNdwxMiW4FAuS93MQHaBi?pid=Api&P=0&h=180",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "$45/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$32/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$60/hr",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.goYHa_TwAu6QMmE1M5MhGQHaIL?pid=Api&P=0&h=180",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Solutions Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Gh8k1gS5C-mc1W9h1Z3LSQHaEK?pid=Api&P=0&h=180",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "Embedded Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$58/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.hSw6MXnBHmkQ4ZqlCCoJoQHaEK?pid=Api&P=0&h=180",
      companyName: "NVIDIA",
      datePosted: "1 week ago",
      post: "GPU Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "$52/hr",
      location: "Ahmedabad, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.UFLqDJ7-_kc8iCqNuvcNrwHaEK?pid=Api&P=0&h=180",
      companyName: "Oracle",
      datePosted: "10 days ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$34/hr",
      location: "Kochi, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.UFLqDJ7-_kc8iCqNuvcNrwHaEK?pid=Api&P=0&h=180",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$50/hr",
      location: "Thiruvananthapuram, India"
    }
  ];






  return (

    <div className="parent">

      {jobOpenings.map(function (ele, idx) {
        return <div key={idx}>
          <Cards company={ele.companyName} datepost={ele.datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} payhour={ele.payPerHour} location={ele.location} logo={ele.brandLogo} />
          </div>
      }
      )
      }



    </div>


  )
}

export default App

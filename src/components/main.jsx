import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Revenue from './Revenue';
import Earnings from './Earnings';
import './style.css';

export default function Main() {
    const data={
        name:"Pradeep",
        img:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        monthlyEarn:40000,
        task:"95%",
        pendingrequest:"15"
    }
    const purpose=[{
      head:"Earning(Monthly)",
      value:40000
    },
    {
      head:"Earning(Annual)",
      value:480000
    },
    {
      head:"Task",
      value:"50% completed"
    },
    {
      head:"Pending Request",
      value:"5"
    }];

  return (
    <div>
        <Navbar Name={data}/>
        <div className='card-purpose'>
          {purpose.map((e,index)=>(
          <Card useHead={e.head} useValue={e.value} key={index}/>
        ))}
        </div>
        <div className='earn-revenue'>
          <Earnings/>
          <Revenue/>
        </div>
        
    </div>
  )
}

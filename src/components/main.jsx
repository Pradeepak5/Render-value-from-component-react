import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Revenue from './Revenue';
import Earnings from './Earnings';
import './style.css';
import { SideBar } from './Sidebar';

export default function Main({data}) {
    
    const val = "DashBoard"
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
    <div style={{display:'flex'}}>
      <div>
          <SideBar />
      </div>
        <div style={{width:'80%'}}>
        <Navbar Name={data} value={val}/>
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
    </div>
  )
}

import React from 'react'

export default function Card({useHead,useValue}) {
    const styles={
        width:'300px',
        height:'100px',
        border:'1px solid grey',
        borderRadius:'5px',
        borderLeft:'10px solid blue',
        marginLeft:'10px',
        marginTop:'10px'
    }
  return (
    <div style={styles}>
        <h5 style={{padding:'6px',color:'green'}}>{useHead}</h5>
        <p style={{marginLeft:'35%',fontSize:'1.2em'}}>{useValue}</p>
    </div>
  )
}

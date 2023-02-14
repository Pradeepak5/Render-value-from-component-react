import React from 'react'

export default function Earnings() {
    const styles={
        width:'800px',
        height:'450px',
        borderRadius:'5px',
        border:'2px solid blue',
        margin:'20px 0px 0px 20px'
    }
    const headerStyle={
        width:'100%',
        height:'50px',
        fontSize:'1.5em',
        borderBottom:'2px solid blue',
        borderLeft:'8px solid blue',
        padding:'5px',
        backgroundColor:'whitesmoke'
    }
  return (
    <div style={styles}>
        <header style={headerStyle}>
            Earning source
        </header>
        <article style={{padding:'22%'}}>Earning source data part will display here...</article>      
    </div>
  )
}

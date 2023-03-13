import './App.css';
import Main from './components/main';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from './components/Sidebar';
import TextLinkExample from './components/Navbar';

function App() {
  const data={
    name:"Pradeep",
    img:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    monthlyEarn:40000,
    task:"95%",
    pendingrequest:"15"
}
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main data={data}/>}/>
        <Route path='/component' element={<ComponentPage data={data}/>} />
        <Route path='/charts' element={<Charts data={data}/>} />
      </Routes>
    </div>
  );
}

function ComponentPage({data}){
  return (
    <div style={{display:'flex'}}>
      <div>
      <SideBar />
      </div>
      <div style={{width:'80%'}}>
        <TextLinkExample Name={data} value="Component"/>
        <h1 style={{padding:'270px'}}>Component contents will takes place here.....</h1>
      </div>
    </div>
  )
}

function Charts({data}){
  return (
    <div style={{display:'flex'}}>
      <div>
      <SideBar />
      </div>
      <div style={{width:'80%'}}>
        <TextLinkExample Name={data} value="Charts"/>
        <h1 style={{padding:'270px'}}>Chart contents will takes place here.....</h1>
      </div>
    </div>
  )
}
export default App;

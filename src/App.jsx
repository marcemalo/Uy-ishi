import './App.css';
import Nav from "./components/nav/Nav"
import Single from './components/single/Single';
import All from './routes/all/All';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
    <Nav/>
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path="single/:id" element={<Single/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='all' element={<All/>}/>
     </Routes>
    </>
  )
}

export default App;
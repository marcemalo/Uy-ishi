import './App.css';
import Nav from './components/nav/Nav';
import Home from './routes/home/Home';
import Single from './routes/single/Single';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
     <Nav/>
     <Routes>
      <Route path='' element={<Home/>}/>
        <Route path='single' element={<Single/>}/>
     </Routes>
    </>
  )
}

export default App;
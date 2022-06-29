import React, {useState} from 'react'
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Dashboard from './pages/Dashboard/Dashboard'
import Inventory from './pages/Inventory/Inventory'
import Orders from './pages/Orders/Orders';
import Shipping from './pages/Shipping/Shipping'
import Channel from './pages/Channel/Channel'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  const [location, setLocation] = useState();
  const editLocation = (val) => {
    setLocation(val)
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <div className='app_body'>
          <SideBar location={location}/>
          <Routes>
            <Route path='/dashboard' element={<Dashboard editLocation={editLocation}/>} />
            <Route path='/inventory' element={<Inventory editLocation={editLocation}/>} />
            <Route path='/orders' element={<Orders editLocation={editLocation}/>} />
            <Route path='/shipping' element={<Shipping editLocation={editLocation}/>} />
            <Route path='/channel' element={<Channel editLocation={editLocation}/>} />
            <Route path='/' element={<Dashboard editLocation={editLocation}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

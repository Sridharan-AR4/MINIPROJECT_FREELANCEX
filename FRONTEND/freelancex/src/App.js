import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Main from './components/UI/Main';
import HomePage from './pages/HomePage';
import Features from './components/UI/Features';
import Footer from './components/UI/Footer';
import HowItWorks from './components/UI/HowItWorks';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import FreelancerDashboard from './components/DashBoards/FreelancerDashboard';
import ClientDashboard from './components/DashBoards/ClientDashboard';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import { Usercontext } from './Usercontext';
import NewProject from './components/DashBoards/NewProject';
import Smartcontract from './components/DashBoards/Smartcontract';
function App() {
  const [user,setUser] = useState({
    id:0,
    name:'',
    email:'',
    password:'',
    role:''
  })
  return (
    <>
    <Usercontext.Provider value={[user,setUser]}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/fdashboard' element={<FreelancerDashboard/>} />
        <Route path='/cdashboard' element={<ClientDashboard/>} />
        <Route path='/newproject' element={<NewProject/>} />
        <Route path='/smartcontract' element={<Smartcontract/>} />
      </Routes>
    </BrowserRouter>
    </Usercontext.Provider>
    </>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} >Home</Route>
        <Route path='/' element={<Landing />} >Landing</Route>
        <Route path='/Aboutus' element={<AboutUs />} >AboutUs</Route>
        <Route path='/ContactUs' element={<ContactUs />} >ContactUs</Route>
        <Route path='/login' element={<Login />} >Login</Route>
        <Route path='/register' element={<Register/>} >Register</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

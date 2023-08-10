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
import ProtectedRoutes from "./hoc/ProtectedRoutes"
import ShareLayout from './Pages/SharedLayout';
import DashBoard from './Components/Dashboard/DashBoard';

function App() {
  return (
    <div className="App">
       <Routes>
        {/* <Route path='/' element={<Home />} >Home</Route> */}
          <Route path="/" element={<ProtectedRoutes><ShareLayout/></ProtectedRoutes>}>
        <Route path='/' element={<Landing />} >Landing</Route>
        <Route path='/Aboutus' element={<AboutUs />} >AboutUs</Route>
        <Route path='/ContactUs' element={<ContactUs />} >ContactUs</Route>
        <Route path='/login' element={<Login />} >Login</Route>
          <Route path='/register' element={<Register />} >Register</Route>
           <Route path='/dashboard' element={<DashBoard />} >Register</Route>
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProtectedRoutes from "./hoc/ProtectedRoutes"
import ShareLayout from './Pages/SharedLayout';
import DashBoard from './Components/Dashboard/DashBoard';
import Home from './Pages/Home/Home';
import { useSelector } from 'react-redux';

function App() {
const { user } = useSelector((store) => store.user);
  return (
    <div className="App">
       <Routes>
        {!user ?
        <Route path="/" element={<ShareLayout />}>
         <Route path='/' element={<Landing />} >Landing</Route>
             <Route path='/Aboutus' element={<AboutUs />} >AboutUs</Route>
            <Route path='/ContactUs' element={<ContactUs />} >ContactUs</Route>
            <Route path='/login' element={<Login />} >Login</Route>
            <Route path='/register' element={<Register />} >Register</Route>
            </Route>:
          <Route path="/" element={<ProtectedRoutes><ShareLayout /></ProtectedRoutes>}>
            <Route path='/' element={<Home />} >Home</Route>
            <Route path='/dashboard' element={<DashBoard />} ></Route>
          </Route>}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

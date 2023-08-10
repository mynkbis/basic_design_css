import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft } from 'react-icons/fa';
import { toggleSidebar } from '../../features/userSlice';

const Navbar = () => {
   const dispatch = useDispatch()
   const { isSidebarOpen } = useSelector((store) => store.user);
  return (<div>
    <Wrapper>
      {isSidebarOpen && <button type='button' className='toggle-btn' onClick={() => dispatch(toggleSidebar())}>
        <FaAlignLeft />
      
          </button>}
      {isSidebarOpen && <Link className="hide-on-mobile" to="/">Home</Link>}
      {isSidebarOpen && <Link className="hide-on-mobile" to='/Aboutus'>AboutUs</Link>}
      {isSidebarOpen && <Link className="hide-on-mobile" to='/contactus'>ContactUs</Link>}
      { isSidebarOpen && <Link className="hide-on-mobile" to='/Login'>Login</Link>}
      <input type="text" className='search' placeholder='Search Here...'/>
      <button className='logout-btn'>Logout</button>
    </Wrapper>
    </div>
  )
}

export default Navbar




const Wrapper = styled.div`
display: flex;
border: 5px solid #ffcc5c;
flex: 1;
justify-content:space-around;
background: #ffcc5c;
height:35px;
width:100%;
position: fixed;
top:0%;


// aligning button to left while done is increasing its size
// .logout-btn{
//   margin-left:auto;
// }

// .logout-btn{
//   flex: 2
// }
// order item position
// .logout-btn{
//   order:-1
// }

.logout-btn{
      border: 0;
    background: antiquewhite;
     border-radius: 4px;
     height:24px;
     width:70px;
   }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

.logout-btn:hover{
  cursor:pointer;
  color: #fff;
  background: #000;
  transition: 0.8s;
  border-radius: 4px;
}

.search{
  background: #d3dcd580;
}
 
input[type=text] {
  border: 0;
  color: #0000;
  border-radius: 4px;
   padding-left: 4px;
   box-shadow: 0 0 10px #719ECE;
}
input:focus {
  background-color: #dbe5e9bd;
  outline: none !important;
  color: blue;
  padding-left: 4px;
  box-shadow: 0 0 10px #719ECE;
}

@media all and (max-width: 600px) {
 flex-wrap: wrap;
 flex: 1 1 25%
 .search{
  text-align: center
 }
  .hide-on-mobile{
    display: none
  }
}

@media all and (max-width: 400px) {
  flex: 1 1 100%;
  ,
  .hide-on-mobile{
    display: none
  }
  }
`;

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
     <span>=</span>
      <Link className="hide-on-mobile" to="/">Home</Link>
      <Link className="hide-on-mobile" to='/Aboutus'>AboutUs</Link>
      <Link  className="hide-on-mobile" to='/contactus'>ContactUs</Link>
          <Link className="hide-on-mobile" to='/Login'>Login</Link>
      <input type="text" className='search' placeholder='Search Here...'/>
      <button className='logout-btn'>Logout</button>
    </Wrapper>
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

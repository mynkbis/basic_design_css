import React from 'react'
import { Outlet } from 'react-router-dom'
import BigSidebar from "../Components/SideBars/BigSideBar"
import styled from 'styled-components'
import SmallSidebar from '../Components/SideBars/SmallSideBar'
import Navbar from '../Components/Navbar/Navbar'

function ShareLayout() {
  return (
    <Wrapper>
    <main className='dashboard'>
      <SmallSidebar/>
      <BigSidebar />
      <div>
        <Navbar/>
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </div>
    </main>
  </Wrapper>
  )
}

export default ShareLayout


const Wrapper = styled.section`
background-color:var(--grey-50);;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
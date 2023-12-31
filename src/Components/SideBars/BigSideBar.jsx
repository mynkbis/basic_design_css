import { FaAlignLeft } from 'react-icons/fa';
import NavLinks from '../Navlinks';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { toggleSidebar } from '../../features/userSlice';

const BigSidebar=()=> {
  const { isSidebarOpen } = useSelector((store) => store.user);
 const dispatch = useDispatch()
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar' }       
      >
        <div className='content'>
          <header>
             <FaAlignLeft className='toggle-btn' onClick={()=> dispatch(toggleSidebar())} />
              </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar


const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 150px;
      margin-left: -250px;
      transition: var(--transition);
      background: #ffcc5c;
    }
      .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      justify-content:center
      /* align-items: center; */
      /* padding-left: 4.5rem; */
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 1rem;
      background: #ffa500c9;
      color: #fff
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`
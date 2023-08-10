import React from 'react'
import { FaAlignLeft } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { toggleSidebar } from '../features/userSlice';
function Logo() {
  const dispatch = useDispatch()
  return (
    <button type='button' className='toggle-btn' onClick={() => dispatch(toggleSidebar())}>
        <FaAlignLeft />
      </button>
  )
}

export default Logo
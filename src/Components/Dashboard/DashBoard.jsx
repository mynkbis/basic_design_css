import React from 'react'
import { useSelector } from 'react-redux';

const DashBoard = () => {
     const { user } = useSelector((store) => store.user);
  return (
    <div>
    
    </div>
  )
}

export default DashBoard
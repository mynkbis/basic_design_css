import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const { user } = useSelector((store) => store.user);
  const navigate=useNavigate()
  
  useEffect(() => {
    if (!user) { navigate("/") }
  },[user])
  
  return (
    <div>
Hello user        
    </div>
  )
}

export default DashBoard
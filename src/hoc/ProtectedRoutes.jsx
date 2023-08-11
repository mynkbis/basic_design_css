import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
  const { user, userRole } = useSelector((store) => store.user)
  if (!user) {
    return (<Navigate to='/' />)
  }
  return (
    children
  )
}

export default ProtectedRoutes
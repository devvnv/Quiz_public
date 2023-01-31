import React from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'

const WelcomeBanner = () => {
 const nameData =useLocation()
//  console.log(nameData,'nameData');
 const navigate = useNavigate()

 const handleClick = ()=>{
  navigate('/mainquiz')
  }
  

  return (
    <div>
        <h2>Welcome To Quiz Game {nameData.state} </h2>
        <button type='submit'onClick={handleClick}> Lets Begin</button>
    </div>
  )
}

export default WelcomeBanner
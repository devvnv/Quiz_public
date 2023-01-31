import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const EnterName = () => {
  const [inputData, setInputData] = useState('')
  const navigate = useNavigate()

const handleClick = ()=>{
navigate('/welcomebanner',{state:inputData})
}

  return (


    <form action="" id="form1">
          <label for="customerName">Enter your Name</label>
          <div className="input1">
            <input  id="name" onChange={(e) => setInputData(e.target.value)}/>
          </div>
         <div className="btn-sty">
          <button  type="button" value="Submit" id="sdata" onClick={handleClick}>lets start</button>
         </div>
    </form>

  )
}

export default EnterName
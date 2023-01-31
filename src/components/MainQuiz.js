import React, { useEffect, useState } from 'react'
import quizData from '../Quiz.json'
import { NavLink } from 'react-router-dom'


const MainQuiz = () => {

    
    const [currentque, setCurrentQue] = useState(0)
    const [optionchoose, setOptionChoosen] = useState([])
    const [ans, setAns] = useState([])
     
    const [showscore, setShowscore] = useState(false)
    const [score,setScore] = useState(0)

    const handleSelectAns = (value) =>{
        let tempAns = [...ans];
        console.log("ANS:", tempAns)
        tempAns[currentque] = {
            selectedAns:value
        }
        
        setAns(tempAns)
    
    } 

  

    const handleNextButton = () => {
        
        if(quizData[currentque].correct === ans[currentque]?.selectedAns){
            setScore(score + 1)
        }
        
        const nextQue = currentque + 1
        if (currentque < 3) {
            setCurrentQue(nextQue)
        } else {
            setShowscore(true)
        }  
    }


     const handlePrevious = () => {
        setCurrentQue(currentque - 1)
    
      };


   
    return (

        <>

            {showscore ?
                <div className='f-normal ' >

                 YOUR SCORE IS {score} OUT OF {quizData.length}
                 <NavLink to='/'  className="text-deco"><button  className="bttn" >cleare score </button></NavLink>
                 </div> :
                <div className="quiz-container">
                <div className='container'>
                    <div className="quiz-header" id="quiz">

                    <h2  id={quizData[currentque].id}>{quizData[currentque].question}</h2>
                        <ul>
                                        <li>
                                            <input type="radio"
                                            name={quizData[currentque].id}  className="answer radioButton" id='optiona'
                                            key={quizData[currentque].id}
                                            checked={ans[currentque]?.selectedAns==='a'}
                                            // checked = {topping == false}
                                            
                                            // onChange={input}

                                             onClick={()=>{handleSelectAns("a")}}
                                              />

                                            <label htmlFor='optiona'>{quizData[currentque].a}</label>
                                        </li>

                                        <li>
                                            <input type="radio" 
                                            name={quizData[currentque].id}  className="answer radioButton" id='optionb'
                                            key={quizData[currentque].id}
                                            value='b'
                                            checked={ans[currentque]?.selectedAns==='b'}
                                            // onChange={input}
                                            
                                            
                                             onClick={()=>{handleSelectAns("b")}}
                                              />
                                             

                                            <label htmlFor='optionb'>{quizData[currentque].b}</label>
                                        </li>

                                        <li>
                                            <input type="radio" 
                                            name={quizData[currentque].id}  className="answer radioButton" id='optionc'
                                            key={quizData[currentque].id}
                                            value='c'
                                            checked={ans[currentque]?.selectedAns==='c'}
                                            // onChange={input}
                                            
                                             onClick={()=>{handleSelectAns("c")}} />

                                            <label htmlFor='optionc'>{quizData[currentque].c}</label>
                                        </li>

                                        <li>
                                            <input type="radio" 
                                            name={quizData[currentque].id}  className="answer radioButton" id='optiond'
                                            key={quizData[currentque].id}
                                            value='d'
                                            checked={ans[currentque]?.selectedAns==='d'}
                                            // onChange={input}
                                             onClick={()=>{handleSelectAns("d")}} />

                                            <label htmlFor='optiond'>{quizData[currentque].d}</label>
                                        </li>

                                       
                                       
                        </ul>
                    </div>
                    <div className="btn" id="btn-2">


                    {
                        currentque == 0 ? (
                            <button id="next" type="button" onClick={ handleNextButton}>Next</button>
                        ) : (
                            <>
                            { currentque !== 0 && <button onClick={handlePrevious}>Previous</button>}
                        <button id="next" type="button" onClick={ handleNextButton}>Next</button>
                        </>

                        )
                    }
                   
                    
                        
                    </div>
                </div>
                </div>
                
            }
        </>

    )
}


export default MainQuiz
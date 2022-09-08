import React, { useState } from 'react'
import Index from './componets/RatingPage/Index'
import Result from './componets/Result/Result'

const App = () => {
  const [num,setNum] = useState('');
  const [start,setStart]= useState(true)
    function x(id){
        setNum(id);
    }
  return (
    <div className='App'>
    <div className='container'>
      {start? <Index num={num} x={x} setStart={setStart}/>:<Result num={num}/>}
      
    </div>
    </div>
  )
}

export default App



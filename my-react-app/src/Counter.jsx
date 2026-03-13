
import React, {useState} from 'react';


function Counter(){



    const [counter , setCounter] =useState(0);



const addNumber =()=>{
setCounter(counter+1)
}


const subNumber =()=>{
setCounter(counter-1)
}



const reset =()=>{
setCounter(0)
}

    return ( 
    <div  className='counter-container'>


    <p className='counter-display'> {counter}</p>

    <button onClick={addNumber}>add </button>
      <button onClick={subNumber}>substract </button>
      <button onClick={reset}>reset </button>


   
    
    </div>)
    
}


export default Counter

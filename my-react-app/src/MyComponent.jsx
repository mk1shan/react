

import React, {useState} from 'react';

function MyComponent(){

    const  [name,setName] = useState("guest");
    const [age,setAge] =useState(0);
    const [isTrue,setToggle]= useState(false);




    const updateName = ()=>{
       setName("mudipa");
    }
    
    // const updateAge = ()=>{
    //     setAge("23")
    // }

      const incrementAge = ()=>{
        setAge(age +1)
    }

    const checkToggle =()=>{
        setToggle(!isTrue)
    }

    return (<div>

        <p>Name: {name}</p>
        <button onClick={updateName}>set Name</button>
        <br></br>

        <p>Age: {age}</p>
        <button onClick ={incrementAge }>set Age</button>


  <p>is True: {isTrue? "true":"false"}</p>
        <button onClick ={checkToggle }>set toggle</button>


    </div>)
}


export default MyComponent

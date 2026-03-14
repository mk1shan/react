
import React, { useState } from "react";

function UpdateArray(){

const [cars,setCars] = useState([]);
const[carYear,setCarYear] =useState(new Date().getFullYear());
const [carMake,setcARMake]= useState("");
const [carModel,setCarModel]= useState("");



function handleAddCar(){


}


function handleRemoveCar(index){


}



function handleYearChange(event){


}



function handleMakeChange(event){


}




function handleModelChange(event){


}



    return(<>


        <div>
            <h2>
                List of cars object
            </h2>
            <ul>

            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
             <input type="number" value={carMake} onChange={handleMakeChange}

               
             /><br/>

             <input type="number" value={carMake} onChange={handleModelChange}

                placeholder="enter car model"
             /><br/>

             <button onClick={handleAddCar}>ADD CAR</button>
        </div>
    </>)
}


export default UpdateArray

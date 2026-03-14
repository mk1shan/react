import React, {useState} from 'react';

function MyComponent1(){
//onchange


const [name ,setName] = useState("");
const [quantity,setQuantity]=useState();
const [comment,setComment]=useState("");
const [payment,setPayment]=useState("");
const [shipping,setShipping]=useState("")


function handleNameChange(event){
    setName(event.target.value);
}


function handleQuantity(event){
    setQuantity(event.target.value);
}


function handleCoimmnetChange(event){
    setComment(event.target.value);
}


function handlePaymentChange(event)
{
    setPayment(event.target.value);
}

function handleShippingChange(event)
{
    setShipping(event.target.value);
}

     return (
<div>
        <input value ={name} onChange={handleNameChange}/>
        <p>name: {name}</p>


        <input value ={quantity} onChange={handleQuantity} type ="number"/>
        <p>Quantity: {quantity}</p>

        <input value ={comment} onChange={handleCoimmnetChange}/>
        <p>comment: {comment}</p>


        <select value={payment} onChange={handlePaymentChange}>
        <option value =" ">select an option</option>
        <option value="visa">visa</option>


        </select>


        <br/>

        <label>
            <input type="radio" value= "pick up"
                checked={shipping ==="pick up"}
                  onChange={handleShippingChange}                              
                
            />

            pick up
        </label>
<br/>

        <label>
            <input type="radio" value= "Delivery"
                checked={shipping ==="Delivery"}
                  onChange={handleShippingChange}                              
                
            />

   Delivery
        </label>

        <p>shipping :{shipping}</p>
</div>
     );
}

export default MyComponent1

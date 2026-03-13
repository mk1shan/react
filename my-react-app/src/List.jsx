

function List(props){
    
const category = props.category;
const itemList = props.itesm;


const listItems = itemList.map(item=> <li key={item.id}>
    {item.name}:&nbsp;
    <b>{item.calories} </b>
</li>)















//     const fruits=
//         [{id:1,name:'apple ',calories:45},
//         {id:2,name:"orange",calories:56},
//         {id:3,name:"banana",calories:32},
//         {id:4,name:"cocnut",calories:45},
//         {id:5,name:"pineapple",calories:120}];

    
// fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphanbetical

// //const lowcalfruits =fruits.filter(fruit => fruit.calories <100);
// const hgighcalfruits =fruits.filter(fruit => fruit.calories >100);


//     const listItems = hgighcalfruits.map(hgighcalfruit=><li key={hgighcalfruit.id}>
    
//                                             {hgighcalfruit.name}:&nbsp;
//                                             {hgighcalfruit.calories}</li>
//     )







    return(<ol>{listItems}</ol>)
}

export default List

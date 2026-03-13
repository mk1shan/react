
import Student from './Student.jsx'
import UserGreeding from './UserGreeding.jsx';
import List from './List.jsx';

function App() {
 
 const fruits = [{id:1,name:"apple",calories:95},
                {id:2,name:"orange",calories:45},
                {id:3,name:"banana",calories:44}

 ];

 
  return (<List items={fruits} category=" Fruits"/>)
  
}

export default App

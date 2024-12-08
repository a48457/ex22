import logo from './logo.svg';
import './App.css';
import Ex2 from './Comp/lesson2/ex2';
import Ex5 from './Comp/lesson2/Ex5';
import Birthday from './Comp/lesson2/Birthday';
import { useState } from 'react';

function App() {
  const [x,setX]=useState(19)
  const [name,setName]=useState("Person")

  
  return (
    <div className="App">
       {/* { setName("Dvora")}  */}
      <Birthday age={x} name={name}/>
    </div>
  );
}

export default App;

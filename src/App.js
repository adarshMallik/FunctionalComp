import react,{useState}from 'react';
import EffectHook from './EffectHook';
import './App.css';


//  rules of hooks
//1) Hooks needs to be imported at top level
// 2) you cannot define the useState in loops
// 3) you cannot call the hook in conditional


function App() {
  const [count,setCount] = useState(0);
  const [form,setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleIncrement =() => {
    setCount(count+1);
  }

  const handleDecrement =() => {
    setCount(count-1);
  }

  const handleChange = (e) =>{
     console.log(e)
  }
  return (
    <div className="App">
      <EffectHook/>
       Functional component
       {/* <button onClick={handleIncrement}>Inrement</button>
       <button onClick={handleDecrement}>Decrement</button> */}
       {/* {count} */}
        <form>
          <input type="text" placeholder="firstName" name="firstName" onChange={handleChange}/>
          <input type="text" placeholder="lastName" name="lastName" onChange={handleChange}/>
          <input type="text" placeholder="email" name="email" onChange={handleChange}/>
          <input type="text" placeholder="password" name="password" onChange={handleChange}/>
          <button>Signup</button>
        </form>
    </div>
  );
}

export default App;

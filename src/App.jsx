import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('tipis na');
  }

  const handleClick2=()=>{
    alert('Tipis naaaaaaaaaaa')
  }

  const addToFive=(num)=>{
    alert(num + 10);
  }

  return (
    <>
      <h3>React core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>(alert("tipis nah 3"))}>Click 3</button>
      <button onClick={()=>addToFive(12)}>Ten</button>
    </>
  )
}

export default App

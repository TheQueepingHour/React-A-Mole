import { useState } from 'react';
import './App.css';
import { MoleContainer } from './MoleContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const reset = () => {
    window.location.reload()
  }

  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(
          <MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return(
      <div className='row mx-auto my-3 d-flex justify-content-center'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App py-3 text-warning">
      <h1>React-A-Mole</h1>
      <span style={{ fontSize: '24px'}}>{score}</span>
      {createMoleHill()}
      <button onClick={reset}>Reset</button>
    </div>
  );
}


export default App;

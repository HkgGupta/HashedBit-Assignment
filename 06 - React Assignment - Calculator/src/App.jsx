import { useState } from 'react';
import './App.css';

function App() {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(0);

    return (
        <div className="App">
            <h2>React Calculator</h2>
            <div className='input'>
                <label htmlFor="">Number 1 :</label>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter first number' />
            </div>
            <div className='input'>
                <label htmlFor="">Number 2 :</label>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Enter second number' />
            </div>
            <div className='btn'>
                <button onClick={() => setResult(Number(num1) + Number(num2))}>Add</button>
                <button onClick={() => setResult(Number(num1) - Number(num2))}>Subtract</button>
                <button onClick={() => setResult(Number(num1) * Number(num2))}>Multiply</button>
                <button onClick={() => setResult(Number(num1) / Number(num2))}>Divide</button>
            </div>
            <div className='result'>
                <h3>Result : {result}</h3>
            </div>
        </div>
    );
}

export default App;

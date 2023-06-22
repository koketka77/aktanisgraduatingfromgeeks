import React from 'react';
import { useState } from "react";


const Calculator = () => {
    const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);
  const [textColor, setTextColor] = useState('black');

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handleAddition = () => {
    const sum = number1 + number2;
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = number1 - number2;
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = number1 * number2;
    setResult(product);
  };

  const handleDivision = () => {
    if (number2 !== 0) {
      const quotient = number1 / number2;
      setResult(quotient);
    } else {
      setResult('Error: Division by zero');
    }
  };

  const handleColorChange = (event) => {
    setTextColor(event.target.value);
  };
    return (
        <div style={{color:textColor}}>
     
      <div>
        <label>
          Number 1:
          <input type="text" value={number1} onChange={handleNumber1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="text" value={number2} onChange={handleNumber2Change} />
        </label>
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div >
        Result: {result}
      </div>
      <div>
        <label>
          Text Color:
          <select onChange={handleColorChange}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
    
    </div>
 


        </div>
    );
}

export default Calculator;

// src/App.js
import React, { useState } from 'react';
import './App.css';

// Child Component for Dynamic Addition
function Child({ id }) {
  return <div>Child Component {id}</div>;
}

function App() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState('');
  const [children, setChildren] = useState([]);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const addChild = () => {
    setChildren([...children, children.length + 1]);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };


  const isSumButtonDisabled = num1 === '' || num2 === '';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Task 1: Display Simple JSX */}
      <section className="section">
        <h2>Simple JSX</h2>
        <h1>Hello, World!</h1>
        <p>This is a simple JSX example.</p>
      </section>

      {/* Task 2: Display an Array of Records on Screen */}
      <section className="section">
        <h2>Records List</h2>
        <ul>
          {[
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'Michael Johnson' },
            { id:  4,   name: 'Jim Jam'}
            
          ].map(record => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      </section>

      {/* Task 3: Show/Hide Element on Screen */}
      <section className="section">
        <h2>Show/Hide Element</h2>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'} Element
        </button>
        {show && <div>This is a toggleable element.</div>}
      </section>

      {/* Task 4: Enable/Disable a Button */}
      <section className="section">
        <h2>Enable/Disable Dark/Light Mode</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Enable Light Mode' : 'Enablle Dark Mode'}
        </button>
      </section>

      {/* Task 5: Two-Way Data Binding using Textbox */}
      <section className="section">
        <h2>Two-Way Data Binding</h2>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something"
        />
        <p>Text you have entered:- {text}</p>
      </section>

      {/* Task 6: Dynamically Add Child Components */}
      <section className="section">
        <h2>Dynamic Child Components</h2>
        <button onClick={addChild}>Add Child Component</button>
        <div>
          {children.map(id => (
            <Child key={id} id={id} />
          ))}
        </div>
      </section>

      {/* Task 7: Do Sum of Two Numbers */}
      <section className="section">
        <h2>Sum of Two Numbers</h2>
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <button onClick={handleSum} disabled={isSumButtonDisabled}>
          Calculate Sum
        </button>
        {sum !== null && <p>Sum: {sum}</p>}
      </section>
    </div>
  );
}

export default App;

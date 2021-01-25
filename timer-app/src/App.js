import React from 'react'
import './App.css';

function Timer() {
  
  const [seconds, setSeconds] = React.useState(10);

  const handleSubmit = event => {
    event.preventDefault();
  }

  
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('KWANELE!');
    }
  

  return (
    <div className="timer">
      <div>
      <form onSubmit={handleSubmit}>
      <button type='submit' >
          START
        </button>
      
        <h1>{seconds}</h1>
        </form>
      </div>
    </div>
  );
}

    export default Timer
import React from 'react';
import './App.css';
import Main from './components/main/Main.main'

function App() {
  return (
    <div className="App">
      <Main/>
      <div className='flex absolute bg-PM w-full'>
            <span className='w-12 h-12 bg-PM'></span>
            <span className='w-12 h-12 bg-PMS'></span>
            <span className='w-12 h-12 bg-SC'></span>
            <span className='w-12 h-12 bg-SCS'></span>
            <span className='w-12 h-12 bg-TC'></span>
            <span className='w-12 h-12 bg-TCS'></span>
            <span className='w-12 h-12 bg-AC'></span>
            <span className='w-12 h-12 bg-ACS'></span>
            <span className='w-12 h-12 bg-SA'></span>
            <span className='w-12 h-12 bg-SAS'></span>
            </div>
    </div>
  );
}

export default App;

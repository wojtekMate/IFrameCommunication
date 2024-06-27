import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
        window.addEventListener('message', function(event) {

        var eventData = event.data;
        if (eventData.event === 'sessionChanged') {
            var sessionData = eventData.data;
            console.log('Event received in React app', sessionData);
            var responseMessage = { event: 'sessionChangedReceived' };
            var origin = 'http://localhost:5109'; 
            if (event.source) {
                console.log('sending response to MVC app...');
                (event.source as Window).postMessage(responseMessage, origin);
            }
        }
    });

    // remove event listener after unmount component
    return () => {
      window.removeEventListener('message', function(){});
    };
}, []); 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

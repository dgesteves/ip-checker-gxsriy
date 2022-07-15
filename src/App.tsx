import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json()).then(data => fetch(`https://wookie.codesubmit.io/ipcheck?ip=${data.ip}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer WookieIP2022'
      }
    }).then(response => response.json()).then(data => console.log(data)));
  },[]);

  return (
    <div className="App">
      <h1>Hello CodeSubmit!</h1>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dotnetMsg, setDotnetMsg] = useState('Loading...');
  const [javaMsg, setJavaMsg]     = useState('Loading...');

  useEffect(() => {
    // Calls .NET API
    axios.get(`${process.env.REACT_APP_DOTNET_API_URL}/api/hello`)
      .then(r => setDotnetMsg(r.data.message))
      .catch(() => setDotnetMsg('Could not reach .NET API'));

    // Calls Java API
    axios.get(`${process.env.REACT_APP_JAVA_API_URL}/api/hello`)
      .then(r => setJavaMsg(r.data.message))
      .catch(() => setJavaMsg('Could not reach Java API'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <h1>Production Grade Setup - UAT</h1>
      <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>.NET API Response:</h3>
        <p>{dotnetMsg}</p>
      </div>
      <div style={{ marginTop: '20px', padding: '20px', background: '#e8f4e8', borderRadius: '8px' }}>
        <h3>Java API Response:</h3>
        <p>{javaMsg}</p>
      </div>
    </div>
  );
}

export default App;

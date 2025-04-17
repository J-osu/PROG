import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/data') // Cambia el endpoint según tu backend
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mi Portafolio</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
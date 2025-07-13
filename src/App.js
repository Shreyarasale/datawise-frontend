import React, { useEffect, useState } from 'react';

function App() {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/datasets')
      .then(response => response.json())
      .then(data => {
        setDatasets(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Datasets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {datasets.map(ds => (
            <li key={ds._id || ds.id}>
              <strong>{ds.name}</strong> (Owner: {ds.owner})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch('./fake-dev.JSON')
      .then(res => res.json())
      .then(data => {
        setImage(data);
        console.log(data)
      })
  }, []);
  return (
    <div className="App">
      {
        image.map(imgs =>
          <>
            <h2>{imgs.name}</h2>
            <img src={imgs.images} alt="" />
          </>
        )
      }
    </div>
  );
}

export default App;

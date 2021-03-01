import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SweetList from './components/SweetList';
import SweetService from './services/SweetService';
import ISweet from './model/ISweet';

function App() {
  const [sweetList, setSweetList] = useState<Array<ISweet>>([]);
    
  useEffect(() => {    
      const sweetService = new SweetService();
      sweetService.getSweets().then((sweets) => {
        setSweetList(sweets);        
      });
  }, [sweetList.length]);

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
      <div>
        <ul>
          <SweetList sweets={sweetList}></SweetList>
        </ul>
      </div>
    </div>
  );
}

export default App;

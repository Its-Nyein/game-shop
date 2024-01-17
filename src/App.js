import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Main from './pages/Main';
import React,{ useState } from 'react';

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([])
  const [bag, setBag] = useState([])

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
        <Main/>
      </AppContext.Provider>
    </>
  );
}

export default App;

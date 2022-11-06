import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { useState } from 'react'
import Display from './components/Display';


function App() {

  const [theme, setTheme] = useState("light")
  function changeTheme() {
    if (theme === "dark") {
      setTheme("light")
    }
    else {
      setTheme("dark")
    }
  }

  return (
    <>
      <Nav theme={theme} changeTheme={changeTheme} />
      <Home theme={theme} />
      <Display />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { useState } from 'react'


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
    </>
  );
}

export default App;

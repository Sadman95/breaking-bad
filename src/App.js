import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const headerStyle = {
    display: "flex",
    padding: "16px",
    justifyContent: "center"
  }
  return (
    <div className="App">
      <header style={headerStyle}>
        <img width="10%" src={logo} alt="logo missing" />
        <h1 style={{marginLeft: "16px", color: "#085B2E"}}>Breaking Bad Characters</h1>
      </header>
      <BreakingBad></BreakingBad>
    </div>
  );
}

function BreakingBad(){
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])

  return(
    <div className="container">
      {
        characters.map(character => <Char img={character.img} name={character.name} nickname={character.nickname}></Char>)
      }
    </div>
  );
}

function Char(props){
  const imageStyle = {
    width: "100%",
    height: "400px"
  }
  const divStyle = {
    border: "1px solid black",
    backgroundColor: "lavender"
  }
  return(
    <div className="char" style={divStyle}>
      <img style={imageStyle} src={props.img} alt="" />
      <h3>{props.name}</h3>
      <h4 style={{color: "dimgray"}}>{props.nickname}</h4>
    </div>
  )
}

export default App;

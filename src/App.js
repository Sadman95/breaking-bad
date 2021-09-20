import logo from './logo.png';
import './App.css';
import './components/Characters/BreakingBad.css';
import BreakingBad from './components/Characters/BreakingBad';

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
export default App;

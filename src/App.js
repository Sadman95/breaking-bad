import './App.css';
import './components/Characters/BreakingBad.css';
import BreakingBad from './components/Characters/BreakingBad';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BreakingBad></BreakingBad>
    </div>
  );
}
export default App;

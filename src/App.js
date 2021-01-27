import './App.css';
import Header from './components/Header/Header';
import Difficulty from './components/Difficulty/Difficulty';
import PuzzleBoard from './components/PuzzleBoard/PuzzleBoard';
import KeyBoard from './components/KeyBoard/KeyBoard';

function App() {
  return (
    <div>
      <Header />
      <Difficulty />
      <PuzzleBoard />
      <KeyBoard />
    </div>
  );
}

export default App;

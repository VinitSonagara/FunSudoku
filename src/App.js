import './App.css';
import Header from './components/Header/Header';
import Difficulty from './components/Difficulty/Difficulty';
import SudokuBoard from './components/SudokuBoard';
import KeyBoard from './components/KeyBoard/KeyBoard';

function App() {
  return (
    <div>
      <Header />
      <Difficulty />
      <SudokuBoard />
      <KeyBoard />
    </div>
  );
}

export default App;

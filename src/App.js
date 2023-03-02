import './App.css';
import Button from './components/Button';
import Help from './components/Help';
import HangmanDisplay from './components/HangmanDisplay';
import WordArea from './components/WordArea';
import KeyboardArea from './components/KeyboardArea';
import Count from './components/Count';
import Modal from './components/Modal';
// import HelpText from './components/HelpText';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Button text='New Game' onClick={() => window.location.reload()} />
        <Help />
      </div>
      <h1>Hangman</h1>
      <Modal />
      <div className="display-layout">
        <HangmanDisplay />
        <Count />
        <WordArea />
      </div>
      <div className="keyboard-layout">
        <KeyboardArea />
      </div>
      {/* <HelpText /> */}
    </div>
  );
}

export default App;

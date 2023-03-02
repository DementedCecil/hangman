// Import CSS
import './App.css';
// Import Components
import Button from './components/Button';
import Help from './components/Help';
import HangmanDisplay from './components/HangmanDisplay';
import WordArea from './components/WordArea';
import KeyboardArea from './components/KeyboardArea';
import Count from './components/Count';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      {/* Header will display the 'New Game button and the 'Help' icon */}
      <div className="header">
        <Button text='New Game' onClick={() => window.location.reload()} />
        <Help />
      </div>
      <h1>Hangman</h1>
      {/* The below Modal is used at the end of games, to say if the user won or lost */}
      <Modal />
      {/* The display area shows the Hangman image, how many tries left, and the letters found so far / underlines for letters to find */}
      <div className="display-layout">
        <HangmanDisplay />
        <Count />
        <WordArea />
      </div>
      {/* Keyboard area displays all alphabetical characters */}
      <div className="keyboard-layout">
        <KeyboardArea />
      </div>
    </div>
  );
}

export default App;

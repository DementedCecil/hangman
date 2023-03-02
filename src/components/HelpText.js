function HelpText(props) {
    return (
        // Help text displayed when the question mark icon is clicked
        // Help text disappears if question mark clicked again, or modal is clicked
        <div className={'modal help-modal ' + props.className}>
            <h3>Hangman - Rules</h3>
            <p>Hangman is a very simple game to play.  A random word has been selected.  You need to guess that word.</p>
            <p>The amount of letters is marked out above the keyboard. You have 10 chances to guess letters correctly.  Select a letter and if it's there, it will be displayed.  That key will then change to Green.</p>
            <p>If the letter is wrong, it will change to Red, and the next phase of the hangman will be displayed.</p>
            <p>At any time, you can press the 'New Game' button to try another word.</p>
        </div>
    );
}

export default HelpText;
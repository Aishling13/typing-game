import '../TypingGame/TypingGame.css';

function TypingGame() {
	return (
		<div className="TypingGame">
			<h1 className="TypingGame-header">
				Welcome to the Typing Game 😊
			</h1>

			<p className='TypingGame-text'>
				A word
			</p>

			<input className='TypingGame-input' type='text'>
			</input>
		</div>
	)
}

export default TypingGame;
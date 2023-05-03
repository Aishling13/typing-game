import '../TypingGame/TypingGame.css';
import { useState } from 'react';
import randomWords from 'random-words'

const targetWords = randomWords(100);


const getRandomTargetWord = () => {
	return targetWords[Math.floor(Math.random() * targetWords.length)];
};

function TypingGame() {
	// State
	const [targetWord, setTargetWord] = useState(getRandomTargetWord()); // set inital state to 'word' - practice word
	const [userInput, setUserInput] = useState(""); // set initial input state - empty
	const [borderColor, setBorderColor] = useState("yellow");
	const [textColor, setTextColor] = useState("yellow");
	const [score, setScore] = useState(0);

	//console.log(userInput)

	// function to check if the users input matches the target word
	const checkMatch = () => {
		// check if text in input is the same as the target word
		// if matches then console.log("a match")
		// then change border color when a match happens

		// if that then do something

		// If statement to run when user input equals target word 
		if (userInput === targetWord && borderColor === "yellow") {
			//console.log("a match")
			setBorderColor("#70E000");
			setTextColor("#70E000");

			setScore(score + 1);

			setTimeout(() => {
				const randomTargetWord = getRandomTargetWord();
				setTargetWord(randomTargetWord);
				setTextColor("yellow");
				setBorderColor("yellow");
				setUserInput("");
			}, 1000);
		}
	}

	checkMatch();

	return (
		<div className="TypingGame">
			<div className="TypingGame-header-container">
				<h1 className="TypingGame-header">
					Welcome to the <span className="TG-header">Typing Game!</span>
				</h1>
				<img src="https://media0.giphy.com/media/y93slPbDMdeXJQONHa/giphy.gif?cid=ecf05e47tlfmzo37hieoziazkv8lqfb90rvtwg5qvl8ri5ez&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="cartoon dog wacking a laptop's kayboard"/>
			</div>
			<div 
				className="TypingGame-word-container"
				style={{
					borderColor: borderColor
				}}
				>
				<p 
				className='TypingGame-text'
				style={{
					color: textColor
				}}
				>
					{targetWord}
				</p>
				<input 
					className='TypingGame-input' 
					type='text'
					value={userInput}
					onChange={(event) => {
						setUserInput(event.target.value)
						}}
					/>
			</div>
			<div className="TypingGame-stats">
				<p>
					Score: {score}
				</p>
			</div>
			
		{/* </body> */}

		</div>
	)
}

export default TypingGame;
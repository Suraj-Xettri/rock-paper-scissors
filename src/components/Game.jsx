import React, { useState } from 'react';

function Game() {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [scores, setScores] = useState({ wins: 0, losses: 0, draws: 0 });

    const choices = ['Rock', 'Paper', 'Scissors'];

    const playGame = (choice) => {
        const computer = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(computer);

        if (choice === computer) {
            setResult('Draw');
            setScores({ ...scores, draws: scores.draws + 1 });
        } else if (
            (choice === 'Rock' && computer === 'Scissors') ||
            (choice === 'Paper' && computer === 'Rock') ||
            (choice === 'Scissors' && computer === 'Paper')
        ) {
            setResult('You Win!');
            setScores({ ...scores, wins: scores.wins + 1 });
        } else {
            setResult('You Lose!');
            setScores({ ...scores, losses: scores.losses + 1 });
        }
    };

    return (
        <div className="game">
            <h1>Rock Paper Scissors</h1>
            <div className="choices">
                {choices.map((choice) => (
                    <button key={choice} onClick={() => playGame(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
            <div className="result">
                <h2>Your Choice: {userChoice}</h2>
                <h2>Computer's Choice: {computerChoice}</h2>
                <h2>Result: {result}</h2>
            </div>
            <div className="scores">
                <h3>Wins: {scores.wins}</h3>
                <h3>Losses: {scores.losses}</h3>
                <h3>Draws: {scores.draws}</h3>
            </div>
        </div>
    );
}

export default Game;

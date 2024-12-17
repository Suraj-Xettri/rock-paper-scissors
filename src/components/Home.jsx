import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Welcome to Rock Paper Scissors</h1>
            <button onClick={() => navigate('/game')}>Play Game</button>
        </div>
    );
}

export default Home;

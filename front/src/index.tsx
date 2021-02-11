import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { GameProvider } from "./components/GameProvider";

ReactDOM.render(
    <React.StrictMode>
        <GameProvider>
            <>
                <Game />
                <Leaderboard />
            </>
        </GameProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect, useState } from "react";
import "./App.css";
import { getScores } from "./request/request.scores";

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const scoresData = await getScores();

      if (!Array.isArray(scoresData)) {
        setScores([scoresData]);
      } else {
        setScores(scoresData);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Match Scores</h1>
        {scores.length > 0 ? (
          scores.map((score, index) => (
            <div key={index}>
              <h2>Match {index + 1}</h2>
              <p>Team 1 Score: {score.team1Score}</p>
              <p>Team 2 Score: {score.team2Score}</p>
            </div>
          ))
        ) : (
          <p>No scores available at the moment.</p>
        )}
      </header>
    </div>
  );
}

export default App;

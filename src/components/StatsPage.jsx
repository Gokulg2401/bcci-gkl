import React from 'react';
import './StatsPage.css';

const StatsPage = () => {
  const playerStats = [
    { name: 'Virat Kohli', format: 'ODI', runs: 13848, avg: 58.18, centuries: 50 },
    { name: 'Rohit Sharma', format: 'ODI', runs: 10866, avg: 48.96, centuries: 31 },
    { name: 'Virat Kohli', format: 'T20I', runs: 4008, avg: 52.73, centuries: 1 },
    { name: 'Rohit Sharma', format: 'T20I', runs: 3974, avg: 32.05, centuries: 5 },
    { name: 'Sachin Tendulkar', format: 'Test', runs: 15921, avg: 53.78, centuries: 51 },
    { name: 'Rahul Dravid', format: 'Test', runs: 13288, avg: 52.31, centuries: 36 }
  ];

  const bowlingStats = [
    { name: 'Jasprit Bumrah', format: 'ODI', wickets: 149, avg: 24.54, economy: 4.65 },
    { name: 'Kuldeep Yadav', format: 'ODI', wickets: 151, avg: 27.08, economy: 4.96 },
    { name: 'Yuzvendra Chahal', format: 'T20I', wickets: 91, avg: 25.09, economy: 8.35 },
    { name: 'Bhuvneshwar Kumar', format: 'T20I', wickets: 90, avg: 23.53, economy: 7.05 },
    { name: 'Anil Kumble', format: 'Test', wickets: 619, avg: 29.65, economy: 2.69 },
    { name: 'Kapil Dev', format: 'Test', wickets: 434, avg: 29.64, economy: 2.78 }
  ];

  return (
    <div className="stats-page">
      <div className="stats-header">
        <h1>Cricket Statistics</h1>
        <p>Complete statistical overview of Indian cricket</p>
      </div>

      <div className="stats-content">
        <section className="batting-stats">
          <h2>Top Batsmen</h2>
          <div className="stats-table">
            <div className="table-header">
              <span>Player</span>
              <span>Format</span>
              <span>Runs</span>
              <span>Average</span>
              <span>Centuries</span>
            </div>
            {playerStats.map((player, index) => (
              <div key={index} className="table-row">
                <span>{player.name}</span>
                <span>{player.format}</span>
                <span>{player.runs}</span>
                <span>{player.avg}</span>
                <span>{player.centuries}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bowling-stats">
          <h2>Top Bowlers</h2>
          <div className="stats-table">
            <div className="table-header">
              <span>Player</span>
              <span>Format</span>
              <span>Wickets</span>
              <span>Average</span>
              <span>Economy</span>
            </div>
            {bowlingStats.map((bowler, index) => (
              <div key={index} className="table-row">
                <span>{bowler.name}</span>
                <span>{bowler.format}</span>
                <span>{bowler.wickets}</span>
                <span>{bowler.avg}</span>
                <span>{bowler.economy}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="team-stats">
          <h2>Team Records</h2>
          <div className="records-grid">
            <div className="record-item">
              <h3>Highest ODI Score</h3>
              <p>418/5 vs West Indies (2011)</p>
            </div>
            <div className="record-item">
              <h3>Highest T20I Score</h3>
              <p>260/5 vs Sri Lanka (2017)</p>
            </div>
            <div className="record-item">
              <h3>Highest Test Score</h3>
              <p>759/7d vs England (2016)</p>
            </div>
            <div className="record-item">
              <h3>Best ODI Bowling</h3>
              <p>6/12 - Anil Kumble vs West Indies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsPage;
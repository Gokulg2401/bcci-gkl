import React from 'react';
import { useLocation } from 'react-router-dom';
import './PlayerPage.css';

const PlayerPage = () => {
  const location = useLocation();
  const playerName = decodeURIComponent(location.pathname.split('/')[2]);

  const playerData = {
    'Shubman Gill': {
      name: 'Shubman Gill',
      role: 'Captain/Batsman',
      age: 25,
      formats: {
        ODI: { matches: 47, runs: 2328, avg: 58.20, centuries: 5, fifties: 13 },
        Test: { matches: 29, runs: 1799, avg: 35.27, centuries: 3, fifties: 8 },
        T20I: { matches: 23, runs: 521, avg: 26.05, centuries: 0, fifties: 2 }
      }
    },
    'Suryakumar Yadav': {
      name: 'Suryakumar Yadav',
      role: 'Captain/Batsman',
      age: 34,
      formats: {
        T20I: { matches: 68, runs: 2340, avg: 45.00, centuries: 1, fifties: 16 },
        ODI: { matches: 37, runs: 773, avg: 24.78, centuries: 1, fifties: 3 }
      }
    },
    'Virat Kohli': {
      name: 'Virat Kohli',
      role: 'Batsman',
      age: 36,
      formats: {
        ODI: { matches: 295, runs: 13848, avg: 58.18, centuries: 50, fifties: 72 },
        Test: { matches: 113, runs: 8848, avg: 49.15, centuries: 29, fifties: 30 },
        T20I: { matches: 115, runs: 4008, avg: 52.73, centuries: 1, fifties: 37 }
      }
    },
    'Rohit Sharma': {
      name: 'Rohit Sharma',
      role: 'Batsman',
      age: 37,
      formats: {
        ODI: { matches: 262, runs: 10866, avg: 48.96, centuries: 31, fifties: 57 },
        Test: { matches: 59, runs: 4301, avg: 46.24, centuries: 11, fifties: 16 },
        T20I: { matches: 148, runs: 3974, avg: 32.05, centuries: 5, fifties: 29 }
      }
    },
    'Hardik Pandya': {
      name: 'Hardik Pandya',
      role: 'All-rounder',
      age: 31,
      formats: {
        ODI: { matches: 91, runs: 1769, avg: 34.00, wickets: 79, bowlAvg: 42.27 },
        Test: { matches: 11, runs: 532, avg: 31.29, wickets: 17, bowlAvg: 30.47 },
        T20I: { matches: 104, runs: 1551, avg: 27.52, wickets: 79, bowlAvg: 27.65 }
      }
    },
    'Jasprit Bumrah': {
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      age: 31,
      formats: {
        ODI: { matches: 89, wickets: 149, avg: 24.54, economy: 4.65, bestFig: '6/19' },
        Test: { matches: 36, wickets: 159, avg: 20.69, economy: 2.69, bestFig: '6/27' },
        T20I: { matches: 70, wickets: 89, avg: 20.22, economy: 6.62, bestFig: '3/7' }
      }
    }
  };

  const player = playerData[playerName] || {
    name: playerName,
    role: 'Player',
    age: 'N/A',
    formats: { ODI: { matches: 0, runs: 0, avg: 0 } }
  };

  return (
    <div className="player-page">
      <div className="player-header">
        <h1>{player.name}</h1>
        <div className="player-basic-info">
          <p><strong>Role:</strong> {player.role}</p>
          <p><strong>Age:</strong> {player.age}</p>
        </div>
      </div>

      <div className="player-content">
        <div className="stats-section">
          <h2>Career Statistics</h2>
          {Object.entries(player.formats).map(([format, stats]) => (
            <div key={format} className="format-stats">
              <h3>{format}</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Matches</span>
                  <span className="stat-value">{stats.matches}</span>
                </div>
                {stats.runs !== undefined && (
                  <>
                    <div className="stat-item">
                      <span className="stat-label">Runs</span>
                      <span className="stat-value">{stats.runs}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Average</span>
                      <span className="stat-value">{stats.avg}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Centuries</span>
                      <span className="stat-value">{stats.centuries}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Fifties</span>
                      <span className="stat-value">{stats.fifties}</span>
                    </div>
                  </>
                )}
                {stats.wickets !== undefined && (
                  <>
                    <div className="stat-item">
                      <span className="stat-label">Wickets</span>
                      <span className="stat-value">{stats.wickets}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Bowl Avg</span>
                      <span className="stat-value">{stats.bowlAvg || stats.avg}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Economy</span>
                      <span className="stat-value">{stats.economy}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Best Figures</span>
                      <span className="stat-value">{stats.bestFig}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
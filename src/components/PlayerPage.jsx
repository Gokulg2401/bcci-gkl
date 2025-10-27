import React from 'react';
import { useLocation } from 'react-router-dom';
import './PlayerPage.css';

const PlayerPage = () => {
  const location = useLocation();
  const playerName = decodeURIComponent(location.pathname.split('/')[2]).replace(/&#39;/g, "'");

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
    },
    'KL Rahul': {
      name: 'KL Rahul',
      role: 'Wicket-keeper/Batsman',
      age: 32,
      formats: {
        ODI: { matches: 69, runs: 2851, avg: 45.25, centuries: 6, fifties: 15 },
        Test: { matches: 48, runs: 2863, avg: 34.58, centuries: 8, fifties: 13 },
        T20I: { matches: 72, runs: 2265, avg: 37.75, centuries: 2, fifties: 22 }
      }
    },
    'Shreyas Iyer': {
      name: 'Shreyas Iyer',
      role: 'Batsman',
      age: 30,
      formats: {
        ODI: { matches: 50, runs: 1734, avg: 47.05, centuries: 1, fifties: 15 },
        Test: { matches: 14, runs: 719, avg: 35.95, centuries: 1, fifties: 4 },
        T20I: { matches: 57, runs: 1442, avg: 28.84, centuries: 0, fifties: 11 }
      }
    },
    'Ravindra Jadeja': {
      name: 'Ravindra Jadeja',
      role: 'All-rounder',
      age: 36,
      formats: {
        ODI: { matches: 197, runs: 2756, avg: 32.13, wickets: 220, bowlAvg: 36.46 },
        Test: { matches: 73, runs: 3200, avg: 35.26, wickets: 294, bowlAvg: 24.63 },
        T20I: { matches: 74, runs: 515, avg: 29.41, wickets: 54, bowlAvg: 29.85 }
      }
    },
    'Kuldeep Yadav': {
      name: 'Kuldeep Yadav',
      role: 'Bowler',
      age: 30,
      formats: {
        ODI: { matches: 88, wickets: 161, avg: 27.61, economy: 4.92, bestFig: '6/25' },
        Test: { matches: 6, wickets: 21, avg: 24.14, economy: 2.84, bestFig: '5/99' },
        T20I: { matches: 42, wickets: 53, avg: 25.09, economy: 7.56, bestFig: '4/35' }
      }
    },
    'Mohammed Shami': {
      name: 'Mohammed Shami',
      role: 'Bowler',
      age: 34,
      formats: {
        ODI: { matches: 95, wickets: 195, avg: 25.06, economy: 5.28, bestFig: '7/57' },
        Test: { matches: 64, wickets: 229, avg: 27.36, economy: 2.82, bestFig: '6/56' }
      }
    },
    'Yuzvendra Chahal': {
      name: 'Yuzvendra Chahal',
      role: 'Bowler',
      age: 34,
      formats: {
        ODI: { matches: 72, wickets: 121, avg: 27.13, economy: 5.26, bestFig: '6/42' },
        T20I: { matches: 80, wickets: 96, avg: 25.09, economy: 8.17, bestFig: '6/25' }
      }
    },
    'Rishabh Pant': {
      name: 'Rishabh Pant',
      role: 'Wicket-keeper/Batsman',
      age: 27,
      formats: {
        ODI: { matches: 30, runs: 865, avg: 33.27, centuries: 1, fifties: 5 },
        Test: { matches: 33, runs: 2271, avg: 43.67, centuries: 5, fifties: 9 },
        T20I: { matches: 66, runs: 987, avg: 22.43, centuries: 0, fifties: 3 }
      }
    },
    'Yashasvi Jaiswal': {
      name: 'Yashasvi Jaiswal',
      role: 'Batsman',
      age: 23,
      formats: {
        Test: { matches: 15, runs: 1407, avg: 56.28, centuries: 3, fifties: 8 },
        T20I: { matches: 23, runs: 723, avg: 36.15, centuries: 1, fifties: 5 }
      }
    },
    'Axar Patel': {
      name: 'Axar Patel',
      role: 'All-rounder',
      age: 31,
      formats: {
        ODI: { matches: 9, runs: 38, avg: 12.67, wickets: 11, bowlAvg: 33.45 },
        Test: { matches: 11, runs: 447, avg: 31.93, wickets: 43, bowlAvg: 15.79 },
        T20I: { matches: 54, runs: 134, avg: 16.75, wickets: 61, bowlAvg: 20.95 }
      }
    },
    'Arshdeep Singh': {
      name: 'Arshdeep Singh',
      role: 'Bowler',
      age: 25,
      formats: {
        ODI: { matches: 13, wickets: 33, avg: 13.48, economy: 4.12, bestFig: '5/37' },
        T20I: { matches: 50, wickets: 76, avg: 18.09, economy: 8.26, bestFig: '4/9' }
      }
    },
    'Cheteshwar Pujara': {
      name: 'Cheteshwar Pujara',
      role: 'Batsman',
      age: 37,
      formats: {
        ODI: { matches: 5, runs: 51, avg: 17.00, centuries: 0, fifties: 0 },
        Test: { matches: 103, runs: 7195, avg: 43.60, centuries: 19, fifties: 35 }
      }
    },
    'Ajinkya Rahane': {
      name: 'Ajinkya Rahane',
      role: 'Batsman',
      age: 36,
      formats: {
        ODI: { matches: 90, runs: 2962, avg: 35.26, centuries: 3, fifties: 24 },
        Test: { matches: 85, runs: 5077, avg: 38.46, centuries: 12, fifties: 26 },
        T20I: { matches: 20, runs: 375, avg: 20.83, centuries: 0, fifties: 2 }
      }
    },
    'Ravichandran Ashwin': {
      name: 'Ravichandran Ashwin',
      role: 'All-rounder',
      age: 38,
      formats: {
        ODI: { matches: 116, runs: 707, avg: 16.44, wickets: 156, bowlAvg: 33.20 },
        Test: { matches: 100, runs: 3309, avg: 25.69, wickets: 516, bowlAvg: 24.00 },
        T20I: { matches: 65, runs: 184, avg: 12.27, wickets: 72, bowlAvg: 23.22 }
      }
    },
    'Umesh Yadav': {
      name: 'Umesh Yadav',
      role: 'Bowler',
      age: 37,
      formats: {
        ODI: { matches: 75, wickets: 106, avg: 31.66, economy: 5.68, bestFig: '4/31' },
        Test: { matches: 57, wickets: 170, avg: 30.29, economy: 3.36, bestFig: '6/88' },
        T20I: { matches: 10, wickets: 13, avg: 20.15, economy: 8.51, bestFig: '4/25' }
      }
    }
  };

  const player = playerData[playerName] || {
    name: playerName,
    role: 'Player',
    age: 'N/A',
    formats: { 
      ODI: { matches: 'N/A', runs: 'N/A', avg: 'N/A', centuries: 'N/A', fifties: 'N/A' },
      Test: { matches: 'N/A', runs: 'N/A', avg: 'N/A', centuries: 'N/A', fifties: 'N/A' },
      T20I: { matches: 'N/A', runs: 'N/A', avg: 'N/A', centuries: 'N/A', fifties: 'N/A' }
    }
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
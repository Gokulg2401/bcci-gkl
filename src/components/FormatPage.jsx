import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormatPage.css';

const FormatPage = () => {
  const location = useLocation();
  const format = location.pathname.substring(1);

  const formatData = {
    odi: {
      name: 'ODI',
      fullName: 'One Day International',
      captain: 'Shubman Gill',
      viceCaptain: 'Hardik Pandya',
      matches: 1077,
      wins: 565,
      losses: 431,
      winRate: '52.4%',
      topScorer: 'Virat Kohli (13,848 runs)',
      topWicketTaker: 'Kuldeep Yadav (151 wickets)',
      recentMatches: [
        { vs: 'Australia', result: 'Won by 36 runs', date: '2024-01-15', venue: 'Mumbai', scorecard: 'IND 348/6 vs AUS 312/10' },
        { vs: 'South Africa', result: 'Won by 7 wickets', date: '2024-01-10', venue: 'Delhi', scorecard: 'SA 287/8 vs IND 291/3' },
        { vs: 'New Zealand', result: 'Lost by 21 runs', date: '2024-01-05', venue: 'Hyderabad', scorecard: 'NZ 306/7 vs IND 285/10' }
      ]
    },
    t20i: {
      name: 'T20I',
      fullName: 'Twenty20 International',
      captain: 'Suryakumar Yadav',
      viceCaptain: 'Hardik Pandya',
      matches: 262,
      wins: 191,
      losses: 66,
      winRate: '72.9%',
      topScorer: 'Virat Kohli (4,008 runs)',
      topWicketTaker: 'Yuzvendra Chahal (91 wickets)',
      recentMatches: [
        { vs: 'England', result: 'Won by 50 runs', date: '2024-01-20', venue: 'Rajkot', scorecard: 'IND 201/7 vs ENG 151/10' },
        { vs: 'West Indies', result: 'Won by 8 wickets', date: '2024-01-18', venue: 'Kolkata', scorecard: 'WI 152/5 vs IND 156/2' },
        { vs: 'Pakistan', result: 'Won by 6 runs', date: '2024-01-15', venue: 'Ahmedabad', scorecard: 'IND 181/8 vs PAK 175/9' }
      ]
    },
    test: {
      name: 'Test',
      fullName: 'Test Cricket',
      captain: 'Shubman Gill',
      viceCaptain: 'Jasprit Bumrah',
      matches: 571,
      wins: 174,
      losses: 178,
      winRate: '30.5%',
      topScorer: 'Sachin Tendulkar (15,921 runs)',
      topWicketTaker: 'Anil Kumble (619 wickets)',
      recentMatches: [
        { vs: 'Australia', result: 'Won by 295 runs', date: '2024-01-25', venue: 'Perth', scorecard: '1st: IND 150 & 487/6d, AUS 104 & 238' },
        { vs: 'England', result: 'Draw', date: '2024-01-15', venue: 'Chennai', scorecard: '1st: IND 436 & 286/4d, ENG 578 & 178/7' },
        { vs: 'South Africa', result: 'Won by an innings', date: '2024-01-05', venue: 'Pune', scorecard: '1st: IND 601/5d, SA 229 & 189' }
      ]
    }
  };

  const data = formatData[format] || formatData.odi;

  return (
    <div className="format-page">
      <div className="format-header">
        <h1>{data.name} Cricket</h1>
        <p>{data.fullName}</p>
      </div>

      <div className="format-content">
        <div className="leadership-section">
          <h2>Leadership</h2>
          <div className="leadership-cards">
            <div className="leader-card">
              <h3>Captain</h3>
              <p>{data.captain}</p>
            </div>
            <div className="leader-card">
              <h3>Vice Captain</h3>
              <p>{data.viceCaptain}</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h2>Overall Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Matches</h3>
              <p>{data.matches}</p>
            </div>
            <div className="stat-card">
              <h3>Wins</h3>
              <p>{data.wins}</p>
            </div>
            <div className="stat-card">
              <h3>Losses</h3>
              <p>{data.losses}</p>
            </div>
            <div className="stat-card">
              <h3>Win Rate</h3>
              <p>{data.winRate}</p>
            </div>
          </div>
        </div>

        <div className="records-section">
          <h2>Records</h2>
          <div className="records-grid">
            <div className="record-card">
              <h3>Top Run Scorer</h3>
              <p>{data.topScorer}</p>
            </div>
            <div className="record-card">
              <h3>Top Wicket Taker</h3>
              <p>{data.topWicketTaker}</p>
            </div>
          </div>
        </div>

        <div className="recent-section">
          <h2>Recent Matches</h2>
          <div className="matches-list">
            {data.recentMatches.map((match, index) => (
              <div key={index} className="match-card">
                <div className="match-info">
                  <h4>vs {match.vs}</h4>
                  <p className="result">{match.result}</p>
                  <p className="venue">{match.venue}</p>
                  <p className="scorecard">{match.scorecard}</p>
                </div>
                <div className="match-date">{match.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatPage;
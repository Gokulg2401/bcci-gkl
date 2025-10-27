import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SquadsPage.css';

const SquadsPage = () => {
  const [activeFormat, setActiveFormat] = useState('odi');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeFormat]);

  const squads = {
    odi: {
      captain: 'Shubman Gill',
      viceCaptain: 'Hardik Pandya',
      players: [
        { name: 'Shubman Gill', role: 'Captain/Batsman', matches: 47 },
        { name: 'Rohit Sharma', role: 'Batsman', matches: 262 },
        { name: 'Virat Kohli', role: 'Batsman', matches: 295 },
        { name: 'Hardik Pandya', role: 'Vice Captain/All-rounder', matches: 91 },
        { name: 'KL Rahul', role: 'Wicket-keeper/Batsman', matches: 69 },
        { name: 'Shreyas Iyer', role: 'Batsman', matches: 50 },
        { name: 'Ravindra Jadeja', role: 'All-rounder', matches: 197 },
        { name: 'Kuldeep Yadav', role: 'Bowler', matches: 88 },
        { name: 'Jasprit Bumrah', role: 'Bowler', matches: 89 },
        { name: 'Mohammed Shami', role: 'Bowler', matches: 95 },
        { name: 'Yuzvendra Chahal', role: 'Bowler', matches: 72 }
      ]
    },
    t20i: {
      captain: 'Suryakumar Yadav',
      viceCaptain: 'Hardik Pandya',
      players: [
        { name: 'Suryakumar Yadav', role: 'Captain/Batsman', matches: 68 },
        { name: 'Rohit Sharma', role: 'Batsman', matches: 148 },
        { name: 'Virat Kohli', role: 'Batsman', matches: 115 },
        { name: 'Hardik Pandya', role: 'Vice Captain/All-rounder', matches: 104 },
        { name: 'Rishabh Pant', role: 'Wicket-keeper/Batsman', matches: 66 },
        { name: 'Yashasvi Jaiswal', role: 'Batsman', matches: 23 },
        { name: 'Ravindra Jadeja', role: 'All-rounder', matches: 74 },
        { name: 'Axar Patel', role: 'All-rounder', matches: 54 },
        { name: 'Jasprit Bumrah', role: 'Bowler', matches: 70 },
        { name: 'Arshdeep Singh', role: 'Bowler', matches: 50 },
        { name: 'Yuzvendra Chahal', role: 'Bowler', matches: 80 }
      ]
    },
    test: {
      captain: 'Shubman Gill',
      viceCaptain: 'Jasprit Bumrah',
      players: [
        { name: 'Shubman Gill', role: 'Captain/Batsman', matches: 29 },
        { name: 'Rohit Sharma', role: 'Batsman', matches: 59 },
        { name: 'Virat Kohli', role: 'Batsman', matches: 113 },
        { name: 'Jasprit Bumrah', role: 'Vice Captain/Bowler', matches: 36 },
        { name: 'Rishabh Pant', role: 'Wicket-keeper/Batsman', matches: 33 },
        { name: 'Cheteshwar Pujara', role: 'Batsman', matches: 103 },
        { name: 'Ajinkya Rahane', role: 'Batsman', matches: 85 },
        { name: 'Ravindra Jadeja', role: 'All-rounder', matches: 73 },
        { name: 'Ravichandran Ashwin', role: 'All-rounder', matches: 100 },
        { name: 'Mohammed Shami', role: 'Bowler', matches: 64 },
        { name: 'Umesh Yadav', role: 'Bowler', matches: 57 },
        { name: 'Axar Patel', role: 'All-rounder', matches: 11 }
      ]
    }
  };

  const currentSquad = squads[activeFormat];

  return (
    <div className="squads-page">
      <div className="squads-header">
        <h1>Team Squads</h1>
        <p>Current Indian cricket team squads across all formats</p>
      </div>

      <div className="squads-content">
        <div className="format-tabs">
          <button 
            className={activeFormat === 'odi' ? 'active' : ''} 
            onClick={() => setActiveFormat('odi')}
          >
            ODI Squad
          </button>
          <button 
            className={activeFormat === 't20i' ? 'active' : ''} 
            onClick={() => setActiveFormat('t20i')}
          >
            T20I Squad
          </button>
          <button 
            className={activeFormat === 'test' ? 'active' : ''} 
            onClick={() => setActiveFormat('test')}
          >
            Test Squad
          </button>
        </div>

        <div className="squad-info">
          <div className="leadership-info">
            <div className="leader">
              <h3>Captain</h3>
              <p>{currentSquad.captain}</p>
            </div>
            <div className="leader">
              <h3>Vice Captain</h3>
              <p>{currentSquad.viceCaptain}</p>
            </div>
          </div>

          <div className="players-grid">
            {currentSquad.players.map((player, index) => (
              <Link key={index} to={`/player/${encodeURIComponent(player.name.replace(/'/g, "'"))}`} className="player-card">
                <div className="player-info">
                  <h4>{player.name}</h4>
                  <p className="role">{player.role}</p>
                  <p className="matches">{player.matches} matches</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadsPage;
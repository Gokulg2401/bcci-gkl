import React from "react";
import { Routes, Route } from "react-router-dom";

// Cricket App Components
import CricketNavbar from './components/CricketNavbar';
import CricketHome from './components/CricketHome';
import FormatPage from './components/FormatPage';
import StatsPage from './components/StatsPage';
import SquadsPage from './components/SquadsPage';
import TrophyPage from './components/TrophyPage';
import PlayerPage from './components/PlayerPage';

const App = () => {
  return (
    <div className="app-container">
      <CricketNavbar />
      <Routes>
        <Route path="/" element={<CricketHome />} />
        <Route path="/odi" element={<FormatPage />} />
        <Route path="/t20i" element={<FormatPage />} />
        <Route path="/test" element={<FormatPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/squads" element={<SquadsPage />} />
        <Route path="/trophy/*" element={<TrophyPage />} />
        <Route path="/player/*" element={<PlayerPage />} />
      </Routes>
    </div>
  );
};

export default App;
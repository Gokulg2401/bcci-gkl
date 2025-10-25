import React from 'react';
import { Link } from 'react-router-dom';
import './CricketHome.css';

const CricketHome = () => {
  const formats = [
    {
      id: 'odi',
      name: 'ODI',
      fullName: 'One Day International',
      captain: 'Shubman Gill',
      matches: 463,
      wins: 265,
      image: 'https://media.gettyimages.com/id/1563231746/photo/the-international-cricket-council-mens-cricket-world-cup-trophy-on-display-during-the-2nd-odi.jpg?s=612x612&w=gi&k=20&c=BJl2qgrijfnCkKyb9Mpju4j8pKlPJO44PAJr3hZAzFY='
    },
    {
      id: 't20i',
      name: 'T20I',
      fullName: 'Twenty20 International',
      captain: 'Suryakumar Yadav',
      matches: 199,
      wins: 143,
      image: 'https://static.toiimg.com/thumb/msid-75885644,width-400,resizemode-4/75885644.jpg'
    },
    {
      id: 'test',
      name: 'Test',
      fullName: 'Test Cricket',
      captain: 'Shubman Gill',
      matches: 571,
      wins: 174,
      image: 'https://i.pinimg.com/736x/9b/a5/b4/9ba5b4baf0fcb98ec54ad2585900e652.jpg'
    }
  ];

  return (
    <div className="cricket-home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Board of Control for Cricket in India</h1>
          <p>Official home of Indian Cricket</p>
        </div>
      </section>

      <section className="formats-section">
        <h2>Cricket Formats</h2>
        <div className="formats-grid">
          {formats.map(format => (
            <Link key={format.id} to={`/${format.id}`} className="format-card">
              <div className="format-image-container">
                <img src={format.image} alt={format.name} />
              </div>
              <div className="format-info">
                <h3>{format.fullName}</h3>
                <div className="stats">
                  <div className="stat">
                    <span>Captain</span>
                    <strong>{format.captain}</strong>
                  </div>
                  <div className="stat">
                    <span>Matches</span>
                    <strong>{format.matches}</strong>
                  </div>
                  <div className="stat">
                    <span>Wins</span>
                    <strong>{format.wins}</strong>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          <div className="news-item">
            <h3>India wins series 3-1</h3>
            <p>Dominant performance in the recent ODI series</p>
          </div>
          <div className="news-item">
            <h3>New squad announced</h3>
            <p>Fresh faces included for upcoming T20I series</p>
          </div>
          <div className="news-item">
            <h3>Record partnership</h3>
            <p>Historic 300+ run partnership in Test match</p>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <h2>ICC Trophy Achievements</h2>
        <div className="achievements-grid">
          <Link to="/trophy/odi-1983" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>ODI World Cup 1983</h3>
            <p>Captain: Kapil Dev</p>
          </Link>
          <Link to="/trophy/t20-2007" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>T20 World Cup 2007</h3>
            <p>Captain: MS Dhoni</p>
          </Link>
          <Link to="/trophy/odi-2011" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>ODI World Cup 2011</h3>
            <p>Captain: MS Dhoni</p>
          </Link>
          <Link to="/trophy/ct-2013" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>Champions Trophy 2013</h3>
            <p>Captain: MS Dhoni</p>
          </Link>
          <Link to="/trophy/t20-2024" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>T20 World Cup 2024</h3>
            <p>Captain: Rohit Sharma</p>
          </Link>
          <Link to="/trophy/ct-2025" className="achievement-card">
            <div className="trophy-icon">🏆</div>
            <h3>Champions Trophy 2025</h3>
            <p>Captain: Rohit Sharma</p>
          </Link>
        </div>
      </section>

      <section className="captains-section">
        <h2>ICC Winning Captains</h2>
        <div className="captains-grid">
          <div className="captain-card">
            <h3>Kapil Dev</h3>
            <p className="achievement">1983 World Cup Winner</p>
            <p>Led India to their first-ever World Cup victory, taking a stunning catch to dismiss Viv Richards in the final.</p>
          </div>
          <div className="captain-card">
            <h3>MS Dhoni</h3>
            <p className="achievement">2007 T20 WC, 2011 WC, 2013 CT Winner</p>
            <p>Only captain to win all three ICC trophies. Finished 2011 WC with a six, becoming a legend.</p>
          </div>
          <div className="captain-card">
            <h3>Rohit Sharma</h3>
            <p className="achievement">2024 T20 WC, 2025 CT Winner</p>
            <p>Led India to T20 World Cup glory after 17 years and Champions Trophy victory, showcasing exceptional leadership.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CricketHome;
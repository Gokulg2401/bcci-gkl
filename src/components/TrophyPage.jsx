import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TrophyPage.css';

const TrophyPage = () => {
  const location = useLocation();
  const trophyId = location.pathname.split('/')[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trophyId]);

  const trophyData = {
    't20-2007': {
      title: 'T20 World Cup 2007',
      captain: 'MS Dhoni',
      year: '2007',
      venue: 'South Africa',
      final: 'India vs Pakistan',
      result: 'Won by 5 runs',
      squad: [
        'MS Dhoni (C)', 'Virender Sehwag', 'Gautam Gambhir', 'Yuvraj Singh',
        'Rohit Sharma', 'Dinesh Karthik', 'Irfan Pathan', 'Harbhajan Singh',
        'RP Singh', 'Sreesanth', 'Ajit Agarkar', 'Piyush Chawla',
        'Robin Uthappa', 'Joginder Sharma', 'Yusuf Pathan'
      ]
    },
    't20-2024': {
      title: 'T20 World Cup 2024',
      captain: 'Rohit Sharma',
      year: '2024',
      venue: 'USA & West Indies',
      final: 'India vs South Africa',
      result: 'Won by 7 runs',
      squad: [
        'Rohit Sharma (C)', 'Hardik Pandya (VC)', 'Virat Kohli', 'Suryakumar Yadav',
        'Rishabh Pant', 'Sanju Samson', 'Shivam Dube', 'Ravindra Jadeja',
        'Axar Patel', 'Kuldeep Yadav', 'Yuzvendra Chahal', 'Jasprit Bumrah',
        'Arshdeep Singh', 'Mohammed Siraj', 'Yashasvi Jaiswal'
      ]
    },
    'odi-1983': {
      title: 'ODI World Cup 1983',
      captain: 'Kapil Dev',
      year: '1983',
      venue: 'England',
      final: 'India vs West Indies',
      result: 'Won by 43 runs',
      squad: [
        'Kapil Dev (C)', 'Sunil Gavaskar', 'Krishnamachari Srikkanth', 'Mohinder Amarnath',
        'Yashpal Sharma', 'Sandeep Patil', 'Kirti Azad', 'Roger Binny',
        'Madan Lal', 'Syed Kirmani', 'Balwinder Sandhu', 'Ravi Shastri',
        'Dilip Vengsarkar', 'Sunil Valson', 'Pranab Roy'
      ]
    },
    'odi-2011': {
      title: 'ODI World Cup 2011',
      captain: 'MS Dhoni',
      year: '2011',
      venue: 'India',
      final: 'India vs Sri Lanka',
      result: 'Won by 6 wickets',
      squad: [
        'MS Dhoni (C)', 'Virender Sehwag', 'Sachin Tendulkar', 'Gautam Gambhir',
        'Virat Kohli', 'Yuvraj Singh', 'Suresh Raina', 'Harbhajan Singh',
        'Zaheer Khan', 'Munaf Patel', 'Sreesanth', 'Ashish Nehra',
        'R Ashwin', 'Piyush Chawla', 'Yusuf Pathan'
      ]
    },
    'ct-2013': {
      title: 'Champions Trophy 2013',
      captain: 'MS Dhoni',
      year: '2013',
      venue: 'England & Wales',
      final: 'India vs England',
      result: 'Won by 5 runs',
      squad: [
        'MS Dhoni (C)', 'Shikhar Dhawan', 'Rohit Sharma', 'Virat Kohli',
        'Suresh Raina', 'Dinesh Karthik', 'Ravindra Jadeja', 'R Ashwin',
        'Bhuvneshwar Kumar', 'Umesh Yadav', 'Ishant Sharma', 'Mohammed Shami',
        'Murali Vijay', 'Ravichandran Ashwin', 'Amit Mishra'
      ]
    },
    'ct-2025': {
      title: 'Champions Trophy 2025',
      captain: 'Rohit Sharma',
      year: '2025',
      venue: 'Pakistan',
      final: 'India vs Australia',
      result: 'Won by 8 wickets',
      squad: [
        'Rohit Sharma (C)', 'Shubman Gill (VC)', 'Virat Kohli', 'Shreyas Iyer',
        'KL Rahul', 'Hardik Pandya', 'Ravindra Jadeja', 'Axar Patel',
        'Kuldeep Yadav', 'Jasprit Bumrah', 'Mohammed Shami', 'Arshdeep Singh',
        'Yashasvi Jaiswal', 'Suryakumar Yadav', 'Mohammed Siraj'
      ]
    }
  };

  const trophy = trophyData[trophyId] || trophyData['t20-2007'];

  return (
    <div className="trophy-page">
      <div className="trophy-header">
        <div className="trophy-icon">🏆</div>
        <h1>{trophy.title}</h1>
        <p>Captain: {trophy.captain}</p>
      </div>

      <div className="trophy-content">
        <div className="trophy-details">
          <div className="detail-card">
            <h3>Tournament Details</h3>
            <div className="detail-info">
              <p><strong>Year:</strong> {trophy.year}</p>
              <p><strong>Venue:</strong> {trophy.venue}</p>
              <p><strong>Final:</strong> {trophy.final}</p>
              <p><strong>Result:</strong> {trophy.result}</p>
            </div>
          </div>

          <div className="squad-card">
            <h3>Winning Squad</h3>
            <div className="squad-grid">
              {trophy.squad.map((player, index) => (
                <div key={index} className="player-name">
                  {player}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrophyPage;
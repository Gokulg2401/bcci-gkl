# BCCI Cricket Website

Official Board of Control for Cricket in India website built with React.js

## Features

✅ **Cricket Formats** - ODI, T20I, Test match information  
✅ **Team Squads** - Current squad details for all formats  
✅ **Player Statistics** - Individual player career stats  
✅ **ICC Trophies** - Complete trophy history with winning squads  
✅ **Match Statistics** - Recent match results and scorecards  
✅ **Responsive Design** - Mobile-friendly interface  
✅ **Professional UI** - BCCI brand colors and styling  

## Tech Stack

- React.js 18
- React Router DOM
- CSS3 with responsive design
- Modern JavaScript (ES6+)

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Build for Production
```bash
npm run build
```

## Deployment

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Manual Deployment
1. Run `npm run build`
2. Upload the `build` folder to your hosting provider

## Project Structure

```
bcci-cricket-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CricketNavbar.jsx
│   │   ├── CricketHome.jsx
│   │   ├── FormatPage.jsx
│   │   ├── StatsPage.jsx
│   │   ├── SquadsPage.jsx
│   │   ├── TrophyPage.jsx
│   │   ├── PlayerPage.jsx
│   │   └── *.css files
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── netlify.toml
└── README.md
```

## Features Overview

### Cricket Formats
- **ODI**: Led by Shubman Gill
- **T20I**: Led by Suryakumar Yadav  
- **Test**: Led by Shubman Gill

### ICC Trophy History
- 1983 World Cup (Kapil Dev)
- 2007 T20 World Cup (MS Dhoni)
- 2011 World Cup (MS Dhoni)
- 2013 Champions Trophy (MS Dhoni)
- 2024 T20 World Cup (Rohit Sharma)
- 2025 Champions Trophy (Rohit Sharma)

### Interactive Features
- Click on trophy achievements to view winning squads
- Click on players in squads to view detailed statistics
- Responsive navigation for all devices
- Format-specific statistics and recent matches

---

**Built with ❤️ for Indian Cricket**
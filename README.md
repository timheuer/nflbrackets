# 🏈 NFL Playoff Bracket Picker 2025

An interactive NFL playoff bracket picker for the 2024-25 season. Click teams to advance them through each round and pick your Super Bowl champion!

## Features

- **Full playoff bracket** - Wild Card through Super Bowl
- **Click to advance** - Select winning teams by clicking
- **Both teams required** - Can't advance until both matchup slots are filled
- **Confetti celebration** - Victory animation when you pick the Super Bowl champion
- **Reset button** - Start over anytime

## Live Demo

Visit: `https://[your-username].github.io/nflbrackets/`

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to your repository **Settings**
3. Navigate to **Pages** (in the left sidebar under "Code and automation")
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Wait a few minutes for deployment
8. Your site will be live at `https://[your-username].github.io/nflbrackets/`

## Local Development

Simply open `index.html` in a browser, or run a local server:

```bash
# Python 3
python -m http.server 8080

# Then visit http://localhost:8080
```

## Files

- `index.html` - Main bracket structure
- `styles.css` - Styling and animations
- `teams.js` - Team data and playoff seedings
- `app.js` - Application logic and event handlers

## 2024-25 Playoff Teams

**AFC Seeds:**
1. Denver Broncos (13-3)
2. New England Patriots (13-3)
3. Jacksonville Jaguars (10-6)
4. Pittsburgh Steelers (10-6)
5. Houston Texans (10-6)
6. Los Angeles Chargers (10-6)
7. Buffalo Bills (10-6)

**NFC Seeds:**
1. Seattle Seahawks (13-3)
2. Chicago Bears (11-5)
3. Philadelphia Eagles (12-4)
4. Carolina Panthers (8-8)
5. San Francisco 49ers (12-4)
6. Los Angeles Rams (11-4)
7. Green Bay Packers (9-6-1)

---

Made with 🏈 for NFL fans

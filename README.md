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

**Updated as of January 10, 2025 - Wild Card Round Results**

**AFC Wild Card Games (Upcoming):**
- 2. New England Patriots vs 7. Los Angeles Chargers
- 3. Jacksonville Jaguars vs 6. Buffalo Bills
- 4. Pittsburgh Steelers vs 5. Houston Texans
- 1. Denver Broncos (Bye)

**NFC Wild Card Results:**
- ✅ 2. Chicago Bears 31, 7. Green Bay Packers 27
- 3. Philadelphia Eagles vs 6. San Francisco 49ers (Upcoming)
- ✅ 5. Los Angeles Rams 34, 4. Carolina Panthers 31

**Still In Playoff Contention:**
- **AFC:** Broncos (1), Patriots (2), Jaguars (3), Steelers (4), Texans (5), Bills (6), Chargers (7)
- **NFC:** Seahawks (1), Bears (2), Eagles (3), Rams (5), 49ers (6)

**Eliminated:**
- **NFC:** Panthers (4), Packers (7)

---

Made with 🏈 for NFL fans

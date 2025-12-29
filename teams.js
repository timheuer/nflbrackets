// NFL Playoff Teams - 2025 Season (Week 17 Standings)
// Current as of December 29, 2025
// Note: AFC North (PIT/BAL) and NFC South (CAR/TB) division winners TBD in Week 18
// Note: NFC West (SEA/SF) #1 seed still in play for Week 18

const NFL_TEAMS = {
    // All 32 NFL Teams organized by conference and division
    AFC: {
        // AFC East
        patriots: { id: 'patriots', name: 'Patriots', city: 'New England', abbr: 'NE', record: '13-3', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png', division: 'AFC East' },
        bills: { id: 'bills', name: 'Bills', city: 'Buffalo', abbr: 'BUF', record: '11-5', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png', division: 'AFC East' },
        dolphins: { id: 'dolphins', name: 'Dolphins', city: 'Miami', abbr: 'MIA', record: '7-9', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png', division: 'AFC East' },
        jets: { id: 'jets', name: 'Jets', city: 'New York', abbr: 'NYJ', record: '3-13', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png', division: 'AFC East' },
        
        // AFC North
        steelers: { id: 'steelers', name: 'Steelers', city: 'Pittsburgh', abbr: 'PIT', record: '9-7', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png', division: 'AFC North' },
        ravens: { id: 'ravens', name: 'Ravens', city: 'Baltimore', abbr: 'BAL', record: '8-8', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png', division: 'AFC North' },
        bengals: { id: 'bengals', name: 'Bengals', city: 'Cincinnati', abbr: 'CIN', record: '6-10', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png', division: 'AFC North' },
        browns: { id: 'browns', name: 'Browns', city: 'Cleveland', abbr: 'CLE', record: '4-12', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png', division: 'AFC North' },
        
        // AFC South
        jaguars: { id: 'jaguars', name: 'Jaguars', city: 'Jacksonville', abbr: 'JAX', record: '12-4', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png', division: 'AFC South' },
        texans: { id: 'texans', name: 'Texans', city: 'Houston', abbr: 'HOU', record: '11-5', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png', division: 'AFC South' },
        colts: { id: 'colts', name: 'Colts', city: 'Indianapolis', abbr: 'IND', record: '8-8', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png', division: 'AFC South' },
        titans: { id: 'titans', name: 'Titans', city: 'Tennessee', abbr: 'TEN', record: '3-13', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png', division: 'AFC South' },
        
        // AFC West
        broncos: { id: 'broncos', name: 'Broncos', city: 'Denver', abbr: 'DEN', record: '13-3', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png', division: 'AFC West' },
        chargers: { id: 'chargers', name: 'Chargers', city: 'Los Angeles', abbr: 'LAC', record: '11-5', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png', division: 'AFC West' },
        chiefs: { id: 'chiefs', name: 'Chiefs', city: 'Kansas City', abbr: 'KC', record: '6-9', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png', division: 'AFC West' },
        raiders: { id: 'raiders', name: 'Raiders', city: 'Las Vegas', abbr: 'LV', record: '2-14', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png', division: 'AFC West' }
    },
    NFC: {
        // NFC East
        eagles: { id: 'eagles', name: 'Eagles', city: 'Philadelphia', abbr: 'PHI', record: '11-5', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png', division: 'NFC East' },
        cowboys: { id: 'cowboys', name: 'Cowboys', city: 'Dallas', abbr: 'DAL', record: '6-8-1', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png', division: 'NFC East' },
        commanders: { id: 'commanders', name: 'Commanders', city: 'Washington', abbr: 'WAS', record: '4-12', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png', division: 'NFC East' },
        giants: { id: 'giants', name: 'Giants', city: 'New York', abbr: 'NYG', record: '3-13', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png', division: 'NFC East' },
        
        // NFC North
        bears: { id: 'bears', name: 'Bears', city: 'Chicago', abbr: 'CHI', record: '11-5', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png', division: 'NFC North' },
        packers: { id: 'packers', name: 'Packers', city: 'Green Bay', abbr: 'GB', record: '9-6-1', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png', division: 'NFC North' },
        lions: { id: 'lions', name: 'Lions', city: 'Detroit', abbr: 'DET', record: '8-8', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png', division: 'NFC North' },
        vikings: { id: 'vikings', name: 'Vikings', city: 'Minnesota', abbr: 'MIN', record: '8-8', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png', division: 'NFC North' },
        
        // NFC South
        buccaneers: { id: 'buccaneers', name: 'Buccaneers', city: 'Tampa Bay', abbr: 'TB', record: '7-9', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png', division: 'NFC South' },
        panthers: { id: 'panthers', name: 'Panthers', city: 'Carolina', abbr: 'CAR', record: '8-8', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png', division: 'NFC South' },
        falcons: { id: 'falcons', name: 'Falcons', city: 'Atlanta', abbr: 'ATL', record: '6-9', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png', division: 'NFC South' },
        saints: { id: 'saints', name: 'Saints', city: 'New Orleans', abbr: 'NO', record: '6-10', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png', division: 'NFC South' },
        
        // NFC West
        seahawks: { id: 'seahawks', name: 'Seahawks', city: 'Seattle', abbr: 'SEA', record: '13-3', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png', division: 'NFC West' },
        niners: { id: 'niners', name: '49ers', city: 'San Francisco', abbr: 'SF', record: '12-4', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png', division: 'NFC West' },
        rams: { id: 'rams', name: 'Rams', city: 'Los Angeles', abbr: 'LAR', record: '11-4', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png', division: 'NFC West' },
        cardinals: { id: 'cardinals', name: 'Cardinals', city: 'Arizona', abbr: 'ARI', record: '3-13', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png', division: 'NFC West' }
    }
};

// 2025 Playoff Seeds (based on current Week 17 standings)
// Seeds are: 1-4 Division winners, 5-7 Wild Cards
const PLAYOFF_SEEDS = {
    AFC: [
        { seed: 1, teamId: 'broncos', conference: 'afc' },      // AFC West Champ
        { seed: 2, teamId: 'patriots', conference: 'afc' },    // AFC East Champ
        { seed: 3, teamId: 'jaguars', conference: 'afc' },     // AFC South Champ
        { seed: 4, teamId: 'steelers', conference: 'afc' },    // AFC North Champ
        { seed: 5, teamId: 'texans', conference: 'afc' },      // Wild Card
        { seed: 6, teamId: 'chargers', conference: 'afc' },    // Wild Card
        { seed: 7, teamId: 'bills', conference: 'afc' }        // Wild Card
    ],
    NFC: [
        { seed: 1, teamId: 'seahawks', conference: 'nfc' },    // NFC West Champ
        { seed: 2, teamId: 'bears', conference: 'nfc' },       // NFC North Champ
        { seed: 3, teamId: 'eagles', conference: 'nfc' },      // NFC East Champ
        { seed: 4, teamId: 'panthers', conference: 'nfc' },    // NFC South Champ
        { seed: 5, teamId: 'niners', conference: 'nfc' },      // Wild Card
        { seed: 6, teamId: 'rams', conference: 'nfc' },        // Wild Card
        { seed: 7, teamId: 'packers', conference: 'nfc' }      // Wild Card
    ]
};

// Wild Card matchup slots (higher seed hosts)
// Format: 2 vs 7, 3 vs 6, 4 vs 5 (1 seed gets bye)
const WILD_CARD_SETUP = {
    AFC: {
        'afc-wc1-top': 2,    // #2 Patriots
        'afc-wc1-bottom': 7, // #7 Bills
        'afc-wc2-top': 3,    // #3 Jaguars
        'afc-wc2-bottom': 6, // #6 Chargers
        'afc-wc3-top': 4,    // #4 Steelers
        'afc-wc3-bottom': 5  // #5 Texans
    },
    NFC: {
        'nfc-wc1-top': 2,    // #2 Bears
        'nfc-wc1-bottom': 7, // #7 Packers
        'nfc-wc2-top': 3,    // #3 Eagles
        'nfc-wc2-bottom': 6, // #6 Rams
        'nfc-wc3-top': 4,    // #4 Panthers
        'nfc-wc3-bottom': 5  // #5 49ers
    }
};

// Export
window.NFL_TEAMS = NFL_TEAMS;
window.PLAYOFF_SEEDS = PLAYOFF_SEEDS;
window.WILD_CARD_SETUP = WILD_CARD_SETUP;

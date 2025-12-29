// NFL Playoff Bracket Picker - Main Application

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupResetButton();
    setupClickHandlers();
    populateBracket();
}

// Get team data by ID
function getTeamById(teamId, conference) {
    const conf = conference.toUpperCase();
    const teams = NFL_TEAMS[conf];
    return teams ? teams[teamId] : null;
}

// Get playoff team by seed
function getPlayoffTeam(conference, seed) {
    const conf = conference.toUpperCase();
    const seedData = PLAYOFF_SEEDS[conf].find(s => s.seed === seed);
    if (seedData) {
        return getTeamById(seedData.teamId, conference);
    }
    return null;
}

// Create team card HTML
function createTeamCard(team, seed, conference) {
    const card = document.createElement('div');
    card.className = `team-card ${conference}-team`;
    card.dataset.teamId = team.id;
    card.dataset.conference = conference;
    card.dataset.seed = seed;

    card.innerHTML = `
        <span class="seed-badge">${seed}</span>
        <img src="${team.logo}" alt="${team.abbr}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🏈</text></svg>'">
        <div class="team-info">
            <span class="team-abbr">${team.abbr}</span>
            <span class="team-record">${team.record}</span>
        </div>
    `;

    return card;
}

// Populate the bracket with initial teams
function populateBracket() {
    // Clear everything first
    document.querySelectorAll('.team-slot').forEach(slot => {
        const card = slot.querySelector('.team-card');
        if (card) card.remove();
        const placeholder = slot.querySelector('.placeholder');
        if (placeholder) placeholder.style.display = '';
    });

    // AFC Wild Card matchups
    Object.entries(WILD_CARD_SETUP.AFC).forEach(([slotId, seed]) => {
        const slot = document.querySelector(`[data-slot="${slotId}"]`);
        const team = getPlayoffTeam('afc', seed);
        if (slot && team) {
            const placeholder = slot.querySelector('.placeholder');
            if (placeholder) placeholder.style.display = 'none';
            slot.appendChild(createTeamCard(team, seed, 'afc'));
        }
    });

    // NFC Wild Card matchups
    Object.entries(WILD_CARD_SETUP.NFC).forEach(([slotId, seed]) => {
        const slot = document.querySelector(`[data-slot="${slotId}"]`);
        const team = getPlayoffTeam('nfc', seed);
        if (slot && team) {
            const placeholder = slot.querySelector('.placeholder');
            if (placeholder) placeholder.style.display = 'none';
            slot.appendChild(createTeamCard(team, seed, 'nfc'));
        }
    });

    // #1 seeds get bye - place in Divisional round (bottom slot so wild card winner goes to top)
    const afcOneSeed = getPlayoffTeam('afc', 1);
    const nfcOneSeed = getPlayoffTeam('nfc', 1);

    if (afcOneSeed) {
        const afcDiv1Bottom = document.querySelector('[data-slot="afc-div1-bottom"]');
        if (afcDiv1Bottom) {
            const placeholder = afcDiv1Bottom.querySelector('.placeholder');
            if (placeholder) placeholder.style.display = 'none';
            afcDiv1Bottom.appendChild(createTeamCard(afcOneSeed, 1, 'afc'));
        }
        // Show in bye area
        const afcBye = document.getElementById('afc-bye');
        if (afcBye) {
            afcBye.innerHTML = `<img src="${afcOneSeed.logo}" alt="${afcOneSeed.abbr}">`;
        }
    }

    if (nfcOneSeed) {
        const nfcDiv1Bottom = document.querySelector('[data-slot="nfc-div1-bottom"]');
        if (nfcDiv1Bottom) {
            const placeholder = nfcDiv1Bottom.querySelector('.placeholder');
            if (placeholder) placeholder.style.display = 'none';
            nfcDiv1Bottom.appendChild(createTeamCard(nfcOneSeed, 1, 'nfc'));
        }
        // Show in bye area
        const nfcBye = document.getElementById('nfc-bye');
        if (nfcBye) {
            nfcBye.innerHTML = `<img src="${nfcOneSeed.logo}" alt="${nfcOneSeed.abbr}">`;
        }
    }
}

// Setup click handlers for advancing teams
function setupClickHandlers() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.team-card');
        if (!card) return;

        const slot = card.closest('.team-slot');
        if (!slot) return;

        const slotId = slot.dataset.slot;
        const matchup = slot.closest('.matchup');
        
        // Handle Super Bowl clicks
        if (slotId === 'sb-afc' || slotId === 'sb-nfc') {
            // Check both Super Bowl slots are filled
            const sbAfc = document.querySelector('[data-slot="sb-afc"] .team-card');
            const sbNfc = document.querySelector('[data-slot="sb-nfc"] .team-card');
            if (!sbAfc || !sbNfc) {
                showSelectionWarning(slot);
                return;
            }
            advanceToChampion(card);
            return;
        }

        if (!matchup) return;

        // Check both slots in matchup are filled before allowing advancement
        const slots = matchup.querySelectorAll('.team-slot');
        const filledSlots = matchup.querySelectorAll('.team-slot .team-card');
        if (filledSlots.length < slots.length) {
            showSelectionWarning(slot);
            return;
        }

        const round = matchup.dataset.round;
        const gameId = matchup.dataset.game;

        const nextSlotId = getNextSlot(round, gameId);
        if (nextSlotId) {
            const nextSlot = document.querySelector(`[data-slot="${nextSlotId}"]`);
            if (nextSlot) {
                placeTeamInSlot(card, nextSlot);
            }
        }
    });
}

// Show warning when trying to select without both teams
function showSelectionWarning(slot) {
    slot.classList.add('selection-blocked');
    setTimeout(() => slot.classList.remove('selection-blocked'), 500);
}

// Get the next slot for advancement
function getNextSlot(round, gameId) {
    const advancementMap = {
        'wildcard': {
            'afc-wc1': 'afc-div1-top',     // Winner plays #1 seed (bye team is bottom)
            'afc-wc2': 'afc-div2-top',
            'afc-wc3': 'afc-div2-bottom',
            'nfc-wc1': 'nfc-div1-top',     // Winner plays #1 seed (bye team is bottom)
            'nfc-wc2': 'nfc-div2-top',
            'nfc-wc3': 'nfc-div2-bottom'
        },
        'divisional': {
            'afc-div1': 'afc-champ-top',
            'afc-div2': 'afc-champ-bottom',
            'nfc-div1': 'nfc-champ-top',
            'nfc-div2': 'nfc-champ-bottom'
        },
        'championship': {
            'afc-champ': 'sb-afc',
            'nfc-champ': 'sb-nfc'
        }
    };

    return advancementMap[round]?.[gameId];
}

// Place team in a slot
function placeTeamInSlot(sourceCard, targetSlot) {
    const teamId = sourceCard.dataset.teamId;
    const conference = sourceCard.dataset.conference;
    const seed = sourceCard.dataset.seed;
    const team = getTeamById(teamId, conference);

    if (!team) return;

    // Remove existing card
    const existingCard = targetSlot.querySelector('.team-card');
    if (existingCard) existingCard.remove();

    // Hide placeholder
    const placeholder = targetSlot.querySelector('.placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // Add new card
    const newCard = createTeamCard(team, seed, conference);
    targetSlot.appendChild(newCard);
}

// Advance to champion slot
function advanceToChampion(card) {
    const championSlot = document.querySelector('[data-slot="champion"]');
    if (!championSlot) return;

    placeTeamInSlot(card, championSlot);
    
    // Celebrate!
    championSlot.classList.add('celebrating');
    launchConfetti();
}

// Confetti celebration
function launchConfetti() {
    // Remove existing canvas
    const existingCanvas = document.getElementById('confetti-canvas');
    if (existingCanvas) existingCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ['#ffd700', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];

    // Create confetti pieces
    for (let i = 0; i < 200; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            spin: Math.random() * 10 - 5,
            drift: Math.random() * 2 - 1
        });
    }

    let frame = 0;
    const maxFrames = 300;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach(p => {
            ctx.save();
            ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
            ctx.rotate((p.angle * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();

            p.y += p.speed;
            p.x += p.drift;
            p.angle += p.spin;

            // Reset if off screen
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });

        frame++;
        if (frame < maxFrames) {
            requestAnimationFrame(animate);
        } else {
            // Fade out and remove
            canvas.style.transition = 'opacity 1s';
            canvas.style.opacity = '0';
            setTimeout(() => canvas.remove(), 1000);
        }
    }

    animate();
}

// Setup reset button
function setupResetButton() {
    const resetBtn = document.getElementById('resetBtn');
    if (!resetBtn) return;

    // Clone to remove old listeners
    const newBtn = resetBtn.cloneNode(true);
    resetBtn.parentNode.replaceChild(newBtn, resetBtn);

    newBtn.addEventListener('click', () => {
        if (confirm('Reset bracket to initial state?')) {
            resetBracket();
        }
    });
}

// Reset bracket
function resetBracket() {
    // Clear all non-initial slots (wild card winners advance to these)
    const slotsToReset = [
        'afc-div1-top', 'afc-div2-top', 'afc-div2-bottom',
        'afc-champ-top', 'afc-champ-bottom',
        'nfc-div1-top', 'nfc-div2-top', 'nfc-div2-bottom',
        'nfc-champ-top', 'nfc-champ-bottom',
        'sb-afc', 'sb-nfc', 'champion'
    ];

    slotsToReset.forEach(slotId => {
        const slot = document.querySelector(`[data-slot="${slotId}"]`);
        if (slot) {
            const card = slot.querySelector('.team-card');
            if (card) card.remove();
            const placeholder = slot.querySelector('.placeholder');
            if (placeholder) placeholder.style.display = '';
        }
    });

    // Remove celebration effects
    const championSlot = document.querySelector('[data-slot="champion"]');
    if (championSlot) {
        championSlot.classList.remove('celebrating');
    }
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (confettiCanvas) confettiCanvas.remove();

    // Re-populate
    populateBracket();
}

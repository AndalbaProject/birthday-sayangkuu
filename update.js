const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Colors
content = content.replace(/--bg: #081222;/g, '--bg: #2a111a;');
content = content.replace(/--bg2: #0d1b30;/g, '--bg2: #381525;');
content = content.replace(/--rose: #7db4e8;/g, '--rose: #f089b6;');
content = content.replace(/--rose-dim: #5a8fc4;/g, '--rose-dim: #d16b97;');
content = content.replace(/--gold: #53b0d4;/g, '--gold: #ff9ecd;');
content = content.replace(/--gold-dim: #3878a0;/g, '--gold-dim: #d675a3;');
content = content.replace(/--text: #e6eef8;/g, '--text: #ffeef6;');
content = content.replace(/--text-dim: rgba\(230, 238, 248, 0.55\);/g, '--text-dim: rgba(255, 238, 246, 0.55);');
content = content.replace(/--border: rgba\(125, 180, 232, 0.14\);/g, '--border: rgba(240, 137, 182, 0.14);');
content = content.replace(/--glow: rgba\(125, 180, 232, 0.18\);/g, '--glow: rgba(240, 137, 182, 0.18);');

// RGBA occurrences
content = content.replace(/125, 180, 232/g, '240, 137, 182');
content = content.replace(/60, 120, 200/g, '240, 137, 182');
content = content.replace(/40, 90, 180/g, '214, 117, 163');
content = content.replace(/83, 176, 212/g, '255, 158, 205');
content = content.replace(/13, 27, 48/g, '42, 17, 26');

// Hex occurrences
content = content.replace(/#1a2d4a/g, '#2a111a');
content = content.replace(/#2a4d8b/g, '#4a1e2d');

// Petals
content = content.replace(/'rgba\(125,180,232,0.55\)'/g, "'rgba(240,137,182,0.55)'");
content = content.replace(/'rgba\(100,150,210,0.45\)'/g, "'rgba(255,158,205,0.45)'");
content = content.replace(/'rgba\(170,210,250,0.50\)'/g, "'rgba(250,170,210,0.50)'");
content = content.replace(/'rgba\(83,176,212,0.40\)'/g, "'rgba(214,117,163,0.40)'");
content = content.replace(/'rgba\(140,200,235,0.35\)'/g, "'rgba(235,140,185,0.35)'");

// Name
content = content.replace(/<em>Love<\/em>/g, '<em>kiyut</em>');
content = content.replace(/botakkk naaa acuuuu/g, 'kiyut');

// Music
content = content.replace(/<div class="track-title">18<\/div>/g, '<div class="track-title">No. 1 Party Anthem</div>');
content = content.replace(/<div class="track-artist">One Direction<\/div>/g, '<div class="track-artist">Arctic Monkeys</div>');

// Date / Age
content = content.replace(/usia 18 ini/g, 'usia 15 ini');
content = content.replace(/usia <span class="letter-highlight">18<\/span> ini/g, 'usia <span class="letter-highlight">15</span> ini');
content = content.replace(/#favoriteperson/g, '11.08.2011');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Update complete.');

const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Reverse the double UTF-8 encoding
try {
    let buffer = Buffer.from(content, 'latin1');
    let fixedContent = buffer.toString('utf8');
    
    // Check if it worked (if we see the flower emoji)
    if (fixedContent.includes('🌺')) {
        content = fixedContent;
    }
} catch (e) {
    console.error(e);
}

// Apply the user's requested change
content = content.replace(
    /showFlowerMessage\(this, '🌺 — Kamu orang favorit aku 🤍'\)/,
    "showFlowerMessage(this, '🌺 — kamu orang terhebat 🤍')"
);

// Fallback if mojibake is still present
content = content.replace(
    /showFlowerMessage\(this, 'ðŸŒº â€” Kamu orang favorit aku [^']*'\)/,
    "showFlowerMessage(this, '🌺 — kamu orang terhebat 🤍')"
);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Fixed encoding and updated text.');

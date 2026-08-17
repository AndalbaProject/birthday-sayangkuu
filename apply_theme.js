const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Colors
content = content.replace(/--bg: #[0-9a-fA-F]+;/g, '--bg: #e0f2fe;');
content = content.replace(/--bg2: #[0-9a-fA-F]+;/g, '--bg2: #bae6fd;');
content = content.replace(/--rose: #[0-9a-fA-F]+;/g, '--rose: #0284c7;');
content = content.replace(/--rose-dim: #[0-9a-fA-F]+;/g, '--rose-dim: #0369a1;');
content = content.replace(/--gold: #[0-9a-fA-F]+;/g, '--gold: #0f172a;');
content = content.replace(/--gold-dim: #[0-9a-fA-F]+;/g, '--gold-dim: #1e293b;');
content = content.replace(/--text: #[0-9a-fA-F]+;/g, '--text: #082f49;');
content = content.replace(/--text-dim: rgba\([^)]+\);/g, '--text-dim: rgba(8, 47, 73, 0.8);');
content = content.replace(/--border: rgba\([^)]+\);/g, '--border: rgba(2, 132, 199, 0.3);');
content = content.replace(/--glow: rgba\([^)]+\);/g, '--glow: rgba(2, 132, 199, 0.3);');

// Make cards white with opacity
content = content.replace(/rgba\(26, 26, 26, 0\.8\)/g, 'rgba(255, 255, 255, 0.8)');
content = content.replace(/rgba\(26, 26, 26, 0\.6\)/g, 'rgba(255, 255, 255, 0.6)');
content = content.replace(/rgba\(26, 26, 26, 0\.7\)/g, 'rgba(255, 255, 255, 0.7)');

// Title
content = content.replace(/<title>.*?<\/title>/, '<title>Happy Birthday Dede</title>');

// Audio file
content = content.replace(/<source src="shape\.mp3" type="audio\/mpeg">/, '<source src="penjaga_hati.mp3" type="audio/mpeg">');

// Music Text
content = content.replace(/<div class="track-title">.*?<\/div>/, '<div class="track-title">Penjaga Hati</div>');
content = content.replace(/<div class="track-artist">.*?<\/div>/, '<div class="track-artist">Nadhif Basalamah</div>');

// Hero Section
content = content.replace(/<h1 class="hero-title">[\s\S]*?<\/h1>/, `<h1 class="hero-title">
                    <span class="hero-word word-1">happy</span><br>
                    <span class="hero-word word-2">birthday</span><br>
                    <span class="hero-word word-3"><em>kiyutt</em></span>
                </h1>`);
content = content.replace(/<p class="hero-sub reveal">.*?<\/p>/, '<p class="hero-sub reveal">18 Agustus 2026<br>Happy special day for u my love🤍</p>');

// Letter Section
const letterReplacement = `<div class="letter-display-box">
                    <p class="letter-paragraph">
                        <b class="letter-highlight">Happy birthday, kiyutt</b><br>
                        Lalu datang lah hari yang berbeda dari hari biasanya, karena hari ini adalah hari yang dimana langit telah menulis kisah tentangmu di antara bintang-bintang yang bersinar, dan dari sekian banyak ucapan yang terdengar oleh telingamu aku ingin menjadi orang yang akan mengucapkannya dengan bisikan yang berbisik di hati muu dan akan membekas selalu. Happy birthday for u my love🤍.
                    </p>

                    <p class="letter-paragraph">
                        <b class="letter-highlight">For the person i love</b><br>
                        you're the funniest, sweetest, and most loving person ever cuz u always make me smile whenever i'm upset and i'm so lucky that i met a person like u, thank you for always loving me and being there for me. everyday get to call u mine is a blessing and in gratefull that god put you in my live, i hope u have an amazing birthday.
                    </p>

                    <p class="letter-paragraph">
                        berbahagialah karena hari ini semesta sedang merayakan kehadiranmu and that's a reminder of how amazing you are, not just because it's your birthday but because every single day you deserve the world.
                    </p>
                    
                    <p class="letter-paragraph">
                        i love you forever<br>
                        u will always be my person in every universe, sekarang dan kedepannya i hope you doing well🫂.
                    </p>
                    <span class="letter-tag">#favoriteperson</span>
                </div>`;
content = content.replace(/<div class="letter-display-box">[\s\S]*?<\/section>/, letterReplacement + '\n            </section>');

// Closing letter
content = content.replace(/<h2 class="closing-title".*?>[\s\S]*?<\/h2>/, '<h2 class="closing-title" style="font-size: 2rem; line-height: 1.3;">HAPPY BIRTHDAY<br>DEDE🤍</h2>');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Done!');

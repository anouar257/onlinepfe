const fs = require('fs');

const path = 'c:/Users/anoua/Desktop/ONLINEPFE/frontend/src/app/core/data/mock-data.ts';
let content = fs.readFileSync(path, 'utf8');

const images = [
    "'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'", // Math
    "'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400'", // Phys
    "'https://images.unsplash.com/photo-1530213786676-4c72473840aa?auto=format&fit=crop&q=80&w=400'", // Biology
    "'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400'", // French
    "'https://images.unsplash.com/photo-1546410531-d41aed892bb6?auto=format&fit=crop&q=80&w=400'", // English
    "'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400'", // History
    "'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400'", // IT
    "'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'", // Chemistry
    "'https://images.unsplash.com/photo-1505664177941-c66c68e1a166?auto=format&fit=crop&q=80&w=400'", // Philo
    "'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=400'", // Islamic
];

let i = 0;
// We look for colorCode to append image right after it
content = content.replace(/colorCode:\s*'[^']+',/g, (match) => {
    if (i < 10) {
        let replacement = match + `\n        image: ${images[i]},`;
        i++;
        return replacement;
    }
    return match;
});

fs.writeFileSync(path, content);
console.log('mock-data.ts updated with subject images!');

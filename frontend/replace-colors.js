const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.scss')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk('C:/Users/anoua/Desktop/ONLINEPFE/frontend/src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace gradients first!
    content = content.replace(/background:\s*linear-gradient\([^;]+;?/gi, (match) => {
        if (match.includes('#F5A623') || match.includes('#1B4B82') || match.includes('var(--color-primary)')) {
            // Keep the property part if it has "background:"
            return match.replace(/linear-gradient\([^;]+/, 'var(--gradient-orange)');
        }
        return match;
    });

    // Primary blue replacements
    content = content.replace(/#1B4B82/gi, 'var(--color-primary)');
    
    // Navy text/heading replacements
    content = content.replace(/#0f172a/gi, 'var(--color-navy)');
    content = content.replace(/#334155/gi, 'var(--color-navy)');
    content = content.replace(/#475569/gi, 'var(--color-navy)');
    content = content.replace(/#05203e/gi, 'var(--color-navy)'); // just in case
    
    // Orange replacements
    content = content.replace(/#F5A623/gi, 'var(--color-orange-start)');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log(`Colors replaced successfully in ${changedFiles} files!`);

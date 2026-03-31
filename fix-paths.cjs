const fs = require('fs');
let content = fs.readFileSync('src/config/brokerData.ts', 'utf8');
content = content.replace(/"\.\/([^"]+)"/g, '`${import.meta.env.BASE_URL}$1`');
fs.writeFileSync('src/config/brokerData.ts', content);

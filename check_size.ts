import fs from 'fs';
const stats = fs.statSync('public/video_fundo.mp4');
console.log("File size:", stats.size / 1024 / 1024, "MB");

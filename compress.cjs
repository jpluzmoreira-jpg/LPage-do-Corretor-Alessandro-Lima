const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(dir);

async function compressFiles() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      try {
        const stats = fs.statSync(filePath);
        if (stats.size > 500 * 1024) { // Compress if > 500KB
          console.log(`Compressing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
          
          if (ext === '.png') {
            await sharp(filePath)
              .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
              .png({ quality: 80, compressionLevel: 9 })
              .toFile(tempPath);
          } else {
            await sharp(filePath)
              .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
              .jpeg({ quality: 80, progressive: true })
              .toFile(tempPath);
          }
          
          fs.renameSync(tempPath, filePath);
          const newStats = fs.statSync(filePath);
          console.log(`Done: ${(newStats.size / 1024).toFixed(2)} KB`);
        }
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

compressFiles().then(() => console.log('Compression complete.'));

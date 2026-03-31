const https = require('https');
const fs = require('fs');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 303) {
        // Handle redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  try {
    await downloadFile('https://drive.google.com/uc?export=download&id=1eTiJ3rb_PRaoog812iTvifLaXZQ6QiQQ', 'public/alessandro_sobre_novo.jpg');
    console.log('Downloaded sobre image');
    
    await downloadFile('https://drive.google.com/uc?export=download&id=1REsXwjzE1uZazLliAYB9pAs9wKIh3iXa', 'public/contato_imagem_novo.jpg');
    console.log('Downloaded contato image');
  } catch (err) {
    console.error(err);
  }
}

main();

import fs from 'fs';

async function main() {
  try {
    console.log('Downloading image from Google Drive...');
    const url = 'https://drive.google.com/uc?export=download&id=1REsXwjzE1uZazLliAYB9pAs9wKIh3iXa';
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());

    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/contato_imagem.jpg', buffer);
    console.log('Saved to public/contato_imagem.jpg');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

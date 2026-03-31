import fs from 'fs';

async function download() {
  const url = "https://drive.google.com/uc?export=download&id=17QysxFZpOY_v4H4WIGy5db38q0LLhFTX";
  
  // For large files (>25MB), Google Drive returns a warning page with a confirmation token.
  // We need to fetch the page, extract the token, and fetch again.
  
  console.log("Fetching initial URL...");
  const res1 = await fetch(url);
  const text = await res1.text();
  
  const match = text.match(/confirm=([a-zA-Z0-9_-]+)/);
  if (match) {
    const token = match[1];
    console.log("Found confirmation token:", token);
    const downloadUrl = `${url}&confirm=${token}`;
    
    console.log("Downloading video...");
    const res2 = await fetch(downloadUrl);
    
    if (!res2.ok) throw new Error(`HTTP error! status: ${res2.status}`);
    
    const buffer = await res2.arrayBuffer();
    fs.writeFileSync('public/video_fundo.mp4', Buffer.from(buffer));
    console.log("Download complete! Saved to public/video_fundo.mp4");
  } else {
    console.log("No confirmation token found. The file might be small enough or the link is invalid.");
    // Try to save it directly just in case
    const res2 = await fetch(url);
    const buffer = await res2.arrayBuffer();
    fs.writeFileSync('public/video_fundo.mp4', Buffer.from(buffer));
    console.log("Saved directly to public/video_fundo.mp4");
  }
}

download().catch(console.error);

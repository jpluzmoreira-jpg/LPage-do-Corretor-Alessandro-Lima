import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for video to load metadata
  await page.waitForFunction(() => {
    const vid = document.querySelector('video');
    return vid && vid.readyState >= 1;
  }, { timeout: 5000 }).catch(() => console.log("Video metadata timeout"));
  
  const videos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('video')).map(vid => ({
      src: vid.currentSrc,
      readyState: vid.readyState,
      videoWidth: vid.videoWidth,
      error: vid.error ? vid.error.message : null
    }));
  });
  
  console.log("Videos:", videos);
  
  await browser.close();
})();

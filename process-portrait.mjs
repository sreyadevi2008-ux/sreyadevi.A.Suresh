import { Jimp } from 'jimp';

async function processImage() {
  const inputPath = 'C:/Users/SREENANDHANA/.gemini/antigravity/brain/42637f9a-6efb-424b-bcec-8aad2424f552/.user_uploaded/media_1794317397418_a45bf975.jpg';
  const img = await Jimp.read(inputPath);

  const w = img.bitmap.width;
  const h = img.bitmap.height;

  // The car number plate is in the lower-left area around x: 60..340, y: 950..1024
  // Let's heavily blur/obscure that rectangle [x: 50..360, y: 940..1024]
  // In Jimp, we can clone that region, blur it heavily, or set its pixels to a dark blurred tone
  for (let y = 940; y < h; y++) {
    for (let x = 40; x < 360; x++) {
      // Find average of nearby pixels in a 25px radius to create a heavy blur + darkening
      let rSum = 0, gSum = 0, bSum = 0, count = 0;
      const step = 4;
      const radius = 20;
      for (let dy = -radius; dy <= radius; dy += step) {
        for (let dx = -radius; dx <= radius; dx += step) {
          const nx = Math.min(w - 1, Math.max(0, x + dx));
          const ny = Math.min(h - 1, Math.max(0, y + dy));
          const idx = (ny * w + nx) * 4;
          rSum += img.bitmap.data[idx];
          gSum += img.bitmap.data[idx + 1];
          bSum += img.bitmap.data[idx + 2];
          count++;
        }
      }
      const curIdx = (y * w + x) * 4;
      // Darken slightly as well so text is completely unreadable
      img.bitmap.data[curIdx] = Math.floor((rSum / count) * 0.4);
      img.bitmap.data[curIdx + 1] = Math.floor((gSum / count) * 0.4);
      img.bitmap.data[curIdx + 2] = Math.floor((bSum / count) * 0.4);
    }
  }

  await img.write('public/journey-portrait.jpg');
  console.log('Saved blurred & privacy-protected portrait to public/journey-portrait.jpg');
}

processImage().catch(console.error);

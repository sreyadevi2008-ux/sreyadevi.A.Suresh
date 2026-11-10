import { Jimp } from 'jimp';

const img = await Jimp.read('public/profile.jpg');

img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
  const r = this.bitmap.data[idx + 0];
  const g = this.bitmap.data[idx + 1];
  const b = this.bitmap.data[idx + 2];

  // Detect "white-ish" pixels: high brightness, low colour saturation
  const brightness = (r + g + b) / 3;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;

  if (brightness > 220 && saturation < 25) {
    // Fully transparent — pure white background
    this.bitmap.data[idx + 3] = 0;
  } else if (brightness > 200 && saturation < 35) {
    // Semi-transparent — edge blending zone
    const alpha = Math.round(255 * (1 - (brightness - 200) / 55));
    this.bitmap.data[idx + 3] = alpha;
  }
  // Everything else (face, hair, clothes) stays fully opaque
});

await img.write('public/profile.png');
console.log('✅ Background removed → public/profile.png');

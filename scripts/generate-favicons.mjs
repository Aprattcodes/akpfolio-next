import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// SVG with embedded font for consistent rendering
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="64" fill="#14161E"/>
  <text x="256" y="340" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="200" fill="#FF6F61">AKP</text>
</svg>`;

const sizes = [
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgIcon);

  for (const { name, size } of sizes) {
    await sharp(svgBuffer, { density: 300 })
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate ICO from 16x16 and 32x32
  const ico16 = await sharp(svgBuffer, { density: 300 })
    .resize(16, 16)
    .png()
    .toBuffer();

  const ico32 = await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toBuffer();

  // Simple ICO file format (single 32x32 image for compatibility)
  const icoBuffer = createIco(ico32, 32);
  writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');
}

// Create a simple ICO file with a single PNG image
function createIco(pngBuffer, size) {
  const iconDirSize = 6 + 16; // ICONDIR + 1 ICONDIRENTRY
  const totalSize = iconDirSize + pngBuffer.length;

  const buffer = Buffer.alloc(totalSize);
  let offset = 0;

  // ICONDIR
  buffer.writeUInt16LE(0, offset); offset += 2;      // Reserved
  buffer.writeUInt16LE(1, offset); offset += 2;      // Type (1 = ICO)
  buffer.writeUInt16LE(1, offset); offset += 2;      // Number of images

  // ICONDIRENTRY
  buffer.writeUInt8(size, offset); offset += 1;       // Width
  buffer.writeUInt8(size, offset); offset += 1;       // Height
  buffer.writeUInt8(0, offset); offset += 1;          // Color palette
  buffer.writeUInt8(0, offset); offset += 1;          // Reserved
  buffer.writeUInt16LE(1, offset); offset += 2;       // Color planes
  buffer.writeUInt16LE(32, offset); offset += 2;      // Bits per pixel
  buffer.writeUInt32LE(pngBuffer.length, offset); offset += 4; // Size of image data
  buffer.writeUInt32LE(iconDirSize, offset); offset += 4;      // Offset to image data

  // PNG data
  pngBuffer.copy(buffer, offset);

  return buffer;
}

generateFavicons().catch(console.error);

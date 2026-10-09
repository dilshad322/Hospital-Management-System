import 'dotenv/config';
import crypto from 'crypto';

const name = process.env.CLOUDINARY_NAME?.trim();
const key = process.env.CLOUDINARY_API_KEY?.trim();
const secret = process.env.CLOUDINARY_SECRET_KEY?.trim();

console.log({ name, keyLength: key?.length, secretLength: secret?.length });

// 1) Ping test
const ping = await fetch(`https://api.cloudinary.com/v1_1/${name}/ping`, {
  headers: { Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64') },
});
console.log('\n--- PING ---');
console.log('status:', ping.status);
console.log('server:', ping.headers.get('server'));
console.log('body:', (await ping.text()).slice(0, 300));

// 2) Upload test (tiny 1x1 image)
const timestamp = Math.floor(Date.now() / 1000);
const signature = crypto.createHash('sha1').update(`timestamp=${timestamp}${secret}`).digest('hex');
const form = new FormData();
form.append('file', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
form.append('api_key', key);
form.append('timestamp', String(timestamp));
form.append('signature', signature);

const up = await fetch(`https://api.cloudinary.com/v1_1/${name}/image/upload`, { method: 'POST', body: form });
console.log('\n--- UPLOAD ---');
console.log('status:', up.status);
console.log('server:', up.headers.get('server'));
console.log('content-type:', up.headers.get('content-type'));
console.log('body:', (await up.text()).slice(0, 500));
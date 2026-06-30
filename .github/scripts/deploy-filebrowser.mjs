import { createReadStream } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const config = {
  baseUrl: normalizeBaseUrl(process.env.FILEBROWSER_URL),
  username: process.env.FILEBROWSER_USER,
  password: process.env.FILEBROWSER_PASSWORD,
  remoteDir: normalizeRemoteDir(process.env.FILEBROWSER_REMOTE_DIR || '/'),
};

const ignoredDirectories = new Set([
  '.git',
  '.github',
  '.agents',
  '.codex',
  'node_modules',
]);

const ignoredFiles = new Set([
  '.DS_Store',
  'Thumbs.db',
]);

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});

async function main() {
  validateConfig(config);

  const token = await login();
  const files = await listFiles(process.cwd());

  for (const filePath of files) {
    const relativePath = toPosix(path.relative(process.cwd(), filePath));
    const remotePath = joinRemotePath(config.remoteDir, relativePath);
    const remoteDirectory = dirnameRemote(remotePath);

    await ensureRemoteDirectory(token, remoteDirectory);
    await uploadFile(token, remotePath, filePath);
    console.log(`Uploaded ${relativePath}`);
  }

  console.log(`Deploy complete. Uploaded ${files.length} files.`);
}

async function login() {
  const response = await fetch(`${config.baseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: config.username,
      password: config.password,
      recaptcha: '',
    }),
  });

  const token = (await response.text()).trim();

  if (!response.ok || !token) {
    throw new Error(`File Browser login failed: HTTP ${response.status} ${token}`);
  }

  return token;
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    if (entry.isFile() && ignoredFiles.has(entry.name)) continue;

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function ensureRemoteDirectory(token, remoteDirectory) {
  const parts = remoteDirectory.split('/').filter(Boolean);
  let current = '';

  for (const part of parts) {
    current = `${current}/${part}`;
    const response = await fetch(`${config.baseUrl}/api/resources${encodeRemotePath(current)}`, {
      method: 'POST',
      headers: {
        'X-Auth': token,
      },
    });

    if (!response.ok && response.status !== 409) {
      const body = await response.text();
      throw new Error(`Could not create remote directory ${current}: HTTP ${response.status} ${body}`);
    }
  }
}

async function uploadFile(token, remotePath, filePath) {
  const file = new Blob([await streamToArrayBuffer(createReadStream(filePath))]);

  const response = await fetch(`${config.baseUrl}/api/resources${encodeRemotePath(remotePath)}?override=true`, {
    method: 'POST',
    headers: {
      'X-Auth': token,
      'Content-Type': 'application/octet-stream',
    },
    body: file,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Could not upload ${filePath}: HTTP ${response.status} ${body}`);
  }
}

async function streamToArrayBuffer(stream) {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function validateConfig(currentConfig) {
  const missing = Object.entries(currentConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    throw new Error(`Missing deploy config: ${missing.join(', ')}`);
  }
}

function normalizeBaseUrl(url) {
  return (url || '').replace(/\/+$/, '');
}

function normalizeRemoteDir(remoteDir) {
  if (!remoteDir || remoteDir === '/') return '/';
  return `/${remoteDir.replace(/^\/+|\/+$/g, '')}`;
}

function joinRemotePath(remoteRoot, relativePath) {
  if (remoteRoot === '/') return `/${relativePath}`;
  return `${remoteRoot}/${relativePath}`;
}

function dirnameRemote(remotePath) {
  const directory = remotePath.split('/').slice(0, -1).join('/');
  return directory || '/';
}

function encodeRemotePath(remotePath) {
  if (remotePath === '/') return '/';
  return `/${remotePath.split('/').filter(Boolean).map(encodeURIComponent).join('/')}`;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

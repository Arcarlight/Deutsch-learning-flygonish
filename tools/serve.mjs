// 本地静态服务器：node tools/serve.mjs [port] [--open]
// 端口被占用时自动换下一个；如果同一站点已经在运行，就直接打开浏览器。
import { createServer } from "node:http";
import { exec } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const open = args.includes("--open");
const basePort = Number(args.find(a => /^\d+$/.test(a)) || 4321);
let actualPort = basePort;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".md": "text/markdown; charset=utf-8"
};

function openBrowser(port) {
  const url = `http://127.0.0.1:${port}/`;
  const cmd = process.platform === "win32" ? `start "" "${url}"`
    : process.platform === "darwin" ? `open "${url}"`
    : `xdg-open "${url}"`;
  exec(cmd, () => {});
}

async function handler(req, res) {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p === "/__health") {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ app: "pokedoku", port: actualPort }));
      return;
    }
    if (p === "/") p = "/index.html";
    const file = normalize(join(root, p));
    if (!file.startsWith(root + sep)) { res.writeHead(403); res.end("forbidden"); return; }
    const info = await stat(file);
    if (info.isDirectory()) { res.writeHead(302, { Location: p + "/index.html" }); res.end(); return; }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404</h1><p>没有这个文件。</p>");
  }
}

function tryListen(port) {
  return new Promise((resolve, reject) => {
    const srv = createServer(handler);
    srv.once("error", err => {
      if (err.code === "EADDRINUSE") resolve(null);
      else reject(err);
    });
    srv.listen(port, () => resolve({ srv, port }));
  });
}

async function isOurServer(port) {
  try {
    const r = await fetch(`http://127.0.0.1:${port}/__health`, { signal: AbortSignal.timeout(900) });
    if (!r.ok) return false;
    const j = await r.json();
    return j && j.app === "pokedoku";
  } catch {
    return false;
  }
}

let server = null;
for (let port = basePort; port < basePort + 20; port++) {
  const got = await tryListen(port);
  if (got) { server = got; actualPort = got.port; break; }
  if (await isOurServer(port)) {
    console.log(`宝可德语已经在运行：http://127.0.0.1:${port}/`);
    if (open) openBrowser(port);
    process.exit(0);
  }
}

if (!server) {
  console.error("端口都被占用了，找不到可用端口（4321–4340）。");
  process.exit(1);
}

actualPort = server.port;
console.log(`宝可德语本地预览：http://127.0.0.1:${actualPort}/`);
if (server.port !== basePort) console.log(`（端口 ${basePort} 被占用，改用 ${server.port}）`);
if (open) openBrowser(actualPort);

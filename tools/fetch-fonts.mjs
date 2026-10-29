import { writeFile, mkdir } from "node:fs/promises";
const files = [
  ["https://raw.githubusercontent.com/google/fonts/main/ofl/fredoka/Fredoka%5Bwdth,wght%5D.ttf", "assets/fonts/Fredoka-var.ttf"],
  ["https://raw.githubusercontent.com/google/fonts/main/ofl/nunito/Nunito%5Bwght%5D.ttf", "assets/fonts/Nunito-var.ttf"],
  ["https://raw.githubusercontent.com/google/fonts/main/ofl/zcoolkuaile/ZCOOLKuaiLe-Regular.ttf", "tools/fonts-src/ZCOOLKuaiLe.ttf"],
  ["https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/fonts/TTF/LXGWWenKai-Regular.ttf", "tools/fonts-src/LXGWWenKai-Regular.ttf"],
];
await mkdir("assets/fonts", { recursive: true });
await mkdir("tools/fonts-src", { recursive: true });
for (const [u, out] of files) {
  try {
    const r = await fetch(u, { redirect: "follow" });
    if (!r.ok) { console.log("FAIL", r.status, u); continue; }
    const b = Buffer.from(await r.arrayBuffer());
    await writeFile(out, b);
    console.log("OK", out, b.length);
  } catch (e) { console.log("ERR", u, e.message); }
}

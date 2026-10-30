import { mkdir, writeFile } from "node:fs/promises";
const base = "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/";
const chars = {
  torchic: "0255", piplup: "0393", rowlet: "0722",
  flygon: "0330", salamence: "0373", ampharos: "0181",
  dunsparce: "0206", archen: "0566", emolga: "0587", whimsicott: "0547", snivy: "0495",
};
const emotions = ["Normal","Happy","Sad","Angry","Surprised","Crying","Sigh","Stunned","Worried"];
await mkdir("assets/portraits", { recursive: true });
const ok = [];
for (const [slug, id] of Object.entries(chars)) {
  for (const e of emotions) {
    const url = `${base}${id}/${e}.png`;
    const r = await fetch(url);
    if (!r.ok) { console.log("MISS", slug, e, r.status); continue; }
    const b = Buffer.from(await r.arrayBuffer());
    await writeFile(`assets/portraits/${slug}-${e.toLowerCase()}.png`, b);
    ok.push(`${slug}-${e.toLowerCase()} ${b.length}`);
  }
}
console.log(ok.join("\n"));
console.log("total files", ok.length);

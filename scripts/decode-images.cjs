// Decodes base64 image sources into public/ before the Next.js build.
// Images are stored as text (.b64) in the repo because the push tooling
// mangles raw binary; this restores them at build time on any machine.
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "image-sources");
const DEST = path.join(__dirname, "..", "public", "images");

fs.mkdirSync(DEST, { recursive: true });

let count = 0;
for (const f of fs.readdirSync(SRC)) {
  if (!f.endsWith(".b64")) continue;
  const name = f.slice(0, -4); // e.g. "logo.png.b64" -> "logo.png"
  const b64 = fs.readFileSync(path.join(SRC, f), "utf8").replace(/\s+/g, "");
  fs.writeFileSync(path.join(DEST, name), Buffer.from(b64, "base64"));
  // og.jpg lives at the public root
  if (name === "og.jpg") {
    fs.writeFileSync(
      path.join(__dirname, "..", "public", "og.jpg"),
      Buffer.from(b64, "base64")
    );
  }
  count++;
}
console.log(`decode-images: restored ${count} images`);

// Pulls the repo's untouched static folders (games/, files/, assets/, img/, CNAME)
// into public/ so they ship in the build. These directories belong to other
// systems (launcher auto-update, the game distribution CDN paths) and must
// never be edited here — this only copies them, never the other direction.
import { existsSync, cpSync, copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const repoRoot = dirname(webRoot);
const publicDir = join(webRoot, "public");

mkdirSync(publicDir, { recursive: true });

const dirs = ["games", "files", "assets", "img"];
for (const dir of dirs) {
  const src = join(repoRoot, dir);
  const dest = join(publicDir, dir);
  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true });
    console.log(`synced ${dir}/`);
  }
}

const files = ["CNAME", "maintainance.html"];
for (const file of files) {
  const src = join(repoRoot, file);
  const dest = join(publicDir, file);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`synced ${file}`);
  }
}

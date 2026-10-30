// Sets the admin password: prompts for it without echoing, then writes its bcrypt hash to .env.local.
// Usage: npm run admin:password
import { readFileSync, writeFileSync } from "node:fs";
import bcrypt from "bcryptjs";

const ENV_FILE = ".env.local";

function promptHidden(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let value = "";
    stdin.on("data", function onData(char) {
      if (char === "\r" || char === "\n" || char === "\u0004") {
        stdin.setRawMode(false);
        stdin.pause();
        stdin.removeListener("data", onData);
        process.stdout.write("\n");
        resolve(value);
      } else if (char === "\u0003") {
        process.stdout.write("\n");
        process.exit(1);
      } else if (char === "\u007f") {
        value = value.slice(0, -1);
      } else {
        value += char;
      }
    });
  });
}

const password = await promptHidden("New admin password: ");
if (password.length < 10) {
  console.error("Use at least 10 characters.");
  process.exit(1);
}
if ((await promptHidden("Repeat password: ")) !== password) {
  console.error("Passwords don't match. Nothing was changed.");
  process.exit(1);
}

// Next.js expands $VARS in env files, so every $ in the hash is escaped.
const line = `ADMIN_PASSWORD_HASH=${bcrypt.hashSync(password, 12).replace(/\$/g, "\\$")}`;
const env = readFileSync(ENV_FILE, "utf8");
const updated = /^ADMIN_PASSWORD_HASH=.*$/m.test(env)
  ? env.replace(/^ADMIN_PASSWORD_HASH=.*$/m, () => line)
  : `${env.trimEnd()}\n${line}\n`;
writeFileSync(ENV_FILE, updated);
console.log(`Admin password updated in ${ENV_FILE}. Restart the dev server to use it.`);

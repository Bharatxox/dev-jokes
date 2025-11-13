#!/usr/bin/env node
import { showJokes, showHelp } from "../index.js";
import chalk from "chalk";
import pkg from "../package.json" with { type: "json" };

const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
} else if (args.includes("--version")) {
  console.log(chalk.greenBright(`\n📦 dev-jokes version ${pkg.version}\n`));
} else if (args.includes("--count")) {
  const index = args.indexOf("--count");
  const count = parseInt(args[index + 1]) || 1;
  showJokes(count);
} else {
  showJokes();
}

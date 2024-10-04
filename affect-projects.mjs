import { appendFileSync } from "node:fs";
import parser from "yargs-parser";

const rootPkg = "pkg-1";
const totalPkgs = 651;
const pkgsPerLevel = 25;

const { percentage } = parser(process.argv.slice(2), {
  number: ["percentage"],
});

if (percentage < 0 || percentage > 100) {
  throw new Error(`The specified percentage must be between 0 and 100.`);
}

let size = Math.floor(totalPkgs * (percentage / 100));
if (size > totalPkgs) {
  console.warn(
    `The specified size is larger than the amount of projects in the repo (${totalPkgs}). Resetting to ${totalPkgs}.`
  );
  size = 651;
} else if (size < 1) {
  throw new Error(`The specified size must be greater than 0.`);
}

function determineLeafPkgsCountToAffect(size) {
  size--;
  let middlePkgsCount = Math.floor(size / pkgsPerLevel);
  let leafPkgsRemainder =
    size - (middlePkgsCount * pkgsPerLevel + middlePkgsCount + 1);
  if (leafPkgsRemainder < 0) {
    middlePkgsCount--;
    leafPkgsRemainder =
      size - (middlePkgsCount * pkgsPerLevel + middlePkgsCount + 1);
  }
  return middlePkgsCount * pkgsPerLevel + leafPkgsRemainder;
}

function modifyFile(file) {
  appendFileSync(file, `\n// bump`);
}

if (size === 1) {
  modifyFile(`./packages/${rootPkg}/src/index.ts`);
  console.log(`Successfully modified ${rootPkg}!`);
} else if (size === 2) {
  modifyFile(`./packages/${rootPkg}-1/src/index.ts`);
  console.log(`Successfully modified ${rootPkg}-1!`);
} else {
  const leafPkgsToAffect = determineLeafPkgsCountToAffect(size);
  let modified = 0;
  mainLoop: for (let i = 1; i <= pkgsPerLevel; i++) {
    for (let j = 1; j <= pkgsPerLevel; j++) {
      if (modified++ >= leafPkgsToAffect) {
        break mainLoop;
      }
      modifyFile(`./packages/${rootPkg}-${i}-${j}/src/index.ts`);
    }
  }
  console.log(`Successfully modified ${leafPkgsToAffect} leaf packages!`);
}

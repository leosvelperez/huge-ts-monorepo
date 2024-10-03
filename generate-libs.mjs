import { names, updateJson, workspaceRoot } from "@nx/devkit";
import { libraryGenerator } from "@nx/js";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { flushChanges, FsTree } from "nx/src/generators/tree.js";

const tplContent = readFileSync("./lib-file.ts.tpl", "utf8");
const libraryCount = 25;
const componentCount = 250;

async function createLibrary(tree, index, parent, linkChildren = true) {
  const pkgName = parent
    ? names(`${parent.replace(/^packages\//, "")}-${index}`).fileName
    : `pkg-${index}`;
  const root = parent ? `${parent}-${index}` : `packages/pkg-${index}`;

  await libraryGenerator(tree, {
    directory: root,
    addPlugin: true,
    useProjectJson: false,
    skipFormat: true,
  });

  // overwrite default generated ts file to avoid conflicting function names
  tree.write(
    `${root}/src/lib/${pkgName}.ts`,
    `export function ${pkgName.replace(/-/g, "_")}() {
  return '${pkgName}';
}
`
  );

  let indexContent = tree.read(`${root}/src/index.ts`, "utf8");

  for (let i = 1; i <= componentCount; i++) {
    const filePath = `${root}/src/lib/file-${i}.ts`;
    const functionName = `${pkgName.replace(/-/g, "_")}File${i}`;

    tree.write(
      filePath,
      `export function ${functionName}() {
        ${tplContent}
      }
      `
    );

    indexContent += `export { ${functionName} } from './lib/file-${i}';\n`;
  }

  if (linkChildren) {
    updateJson(tree, `${root}/package.json`, (packageJson) => {
      packageJson.dependencies ??= {};

      for (let i = 1; i <= libraryCount; i++) {
        const childName = `${pkgName}-${i}`;
        packageJson.dependencies[childName] = `workspace:*`;
        indexContent += `export * from '${childName}';\n`;
      }

      return packageJson;
    });
  }

  tree.write(`${root}/src/index.ts`, indexContent);

  console.log(`Successfully created library ${pkgName}!`);

  return root;
}

async function generateLibraries() {
  let tree = new FsTree(workspaceRoot);

  // top level
  const topLevelRoot = await createLibrary(tree, 1);

  // 2nd level
  for (let i = 1; i <= libraryCount; i++) {
    const secondLevelRoot = await createLibrary(tree, i, topLevelRoot);

    // 3rd level
    for (let j = 1; j <= libraryCount; j++) {
      await createLibrary(tree, j, secondLevelRoot, false);
      flushChanges(workspaceRoot, tree.listChanges());
      tree = new FsTree(workspaceRoot);
    }
  }

  execSync("pnpm install", {
    cwd: workspaceRoot,
    stdio: "inherit",
    encoding: "utf-8",
  });
  execSync("pnpm nx sync", {
    cwd: workspaceRoot,
    stdio: "inherit",
    encoding: "utf-8",
  });
}

await generateLibraries();

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const {
  componentTemplate,
  indexTemplate,
  storyTemplate,
  testTemplate
} = require("../config/componentTemplates");

try {
  if (process.argv.length <= 2) {
    throw new Error(
      "Please specify a component name.\n\nUsage: npm run generate-component NewComponent\n"
    );
  }

  const fileName = process.argv[2];

  const PATH_PREFIX = `src/components/${fileName}`;

  // Create the directories if the component name doesn't already exist
  if (!fs.existsSync(`src/components/${fileName}`)) {
    try {
      fs.mkdirSync(`src/components/${fileName}`);
      fs.mkdirSync(`src/components/${fileName}/components`);
    } catch (err) {
      throw new Error(err);
    }
  } else {
    throw new Error(
      "This component already exists. Please choose a different name."
    );
  }

  // Array of file template functions and their corresponding filenames
  const templates = [
    [componentTemplate, `${PATH_PREFIX}/${fileName}.js`],
    [indexTemplate, `${PATH_PREFIX}/index.js`],
    [storyTemplate, `${PATH_PREFIX}/${fileName}.stories.js`],
    [testTemplate, `${PATH_PREFIX}/${fileName}.test.js`]
  ];

  // Generate files with templates
  async function generateFiles() {
    for (let i = 0; i < templates.length; i++) {
      try {
        await writeFile(templates[i][1], templates[i][0](fileName), "utf8");
      } catch (err) {
        throw new Error(err);
      }
    }
  }

  // Read in the entry file at src/components/index.js and update the
  // the import/export statements with the newly generated component
  async function updateEntryFile() {
    try {
      const entryFile = await readFile(
        path.resolve("src", "components", "index.js"),
        "utf8"
      );

      // Split the entry file on new lines
      let updatedEntryFile = entryFile.split("\n");

      // Add the import to the top of the file
      updatedEntryFile = [
        `import ${fileName} from "./${fileName}"`,
        ...updatedEntryFile
      ];

      // Grab the index of the exported object
      const exportIndex = updatedEntryFile.indexOf("const library = {") + 1;

      // Add the export statement
      updatedEntryFile.splice(exportIndex, 0, `${fileName},`);

      // Write the file to disk
      writeFile(
        path.resolve("src", "components", "index.js"),
        updatedEntryFile.join("\n"),
        "utf8"
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  generateFiles();
  updateEntryFile();
} catch (err) {
  if (err.message) {
    console.log(err.message);
  }
}

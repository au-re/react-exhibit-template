const packageJSON = require("../package.json");

module.exports = function (plop) {

  // component generator
  plop.setGenerator("component", {
    description: "a reusable component",
    prompts: [{
      type: "input",
      name: "name",
      message: "enter component name"
    }],
    actions: [{
      type: "add",
      path: "../src/components/{{name}}/{{name}}.js",
      templateFile: "templates/Component/Component.txt"
    },
    {
      type: "add",
      path: "../src/components/{{name}}/{{name}}.stories.mdx",
      templateFile: "templates/Component/ComponentStory.txt"
    },
    {
      type: "add",
      path: "../src/components/{{name}}/{{name}}.test.js",
      templateFile: "templates/Component/ComponentTest.txt"
    }]
  });

};
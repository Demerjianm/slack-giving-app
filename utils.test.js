const {
  getVariable,
  getJsonObject,
  putObject,
  handleList
} = require("./utils");

// console.log(getVariable("team_domain", text));

const test = async () => {
  console.log(await getJsonObject({ key: "database.json" }));
};
// test();
// handleList(username = 'michaeldemerjian')
// putObject({ body: JSON.stringify({}), filename: "database.json" });

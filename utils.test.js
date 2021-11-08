const text =
  "token=79NewwpF6ZKlTD&&team_domain=baseline-s&channel_id=DNRUWPF&channel_name=directmessage&user_id=UNKGGFX&user_name=michaeldemerjian&command=%2Fregister&text=fdsaf&api_app_id=A02LG1U7M&is_enterprise_install=false&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FTNTQM46HM%2F29023540%2FJy1nrCXDCP6XSLJeTDHmXmak&trigger_id=27090774225.775837142599.0d32a717bec7b0fc551a8af149985";

const { getVariable, getJsonObject, putObject,handleList } = require("./utils");

// console.log(getVariable("team_domain", text));

const test = async () => {
    console.log(await getJsonObject({ key: "database.json" }))

}
test()
// handleList(username = 'michaeldemerjian')
putObject({ body: JSON.stringify({}), filename: "database.json" });

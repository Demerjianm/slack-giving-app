const {
  getVariable,
  getJsonObject,
  putObject,
  handleList
} = require("./utils");
const { handleGiveBody, giveLogic } = require("./give");

describe("Test some utility functions", () => {
  const body =
    "token=79NewwpFALZPFsubAn6ZKlTD&team_id=TNTQM46HM&team_domain=baseline-software&channel_id=DNRUWNFPF&channel_name=directmessage&user_id=UNKGGFXGR&user_name=michaeldemerjian&command=%2Fgive&text=michael+100&api_app_id=A02LGF61U7M&is_enterprise_install=false&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FTNTQM46HM%2F2737118714551%2FuiMClIbOzO6iK08lxg0ixTvG&trigger_id=2754017811268.775837142599.a98e5462e6ddde1a2ca64eb1f92289db";

  test("handleGiveBody", () => {
    expect(handleGiveBody(body)).toEqual({
      sender: "michaeldemerjian",
      receiver: "michael",
      amount: "100"
    });
  });
  test.only("giveLogic", async () => {
    const res = await giveLogic(body);
    console.log(res);
  });
});
// console.log(getVariable("team_domain", text));

// const test = async () => {
//   console.log(await getJsonObject({ key: "database.json" }));
// };
// test();
// handleList(username = 'michaeldemerjian')
// putObject({ body: JSON.stringify({}), filename: "database.json" });

const { getVariable, handleList } = require("./utils");

const main = async (event, context, callback) => {
  const body = event.body;
  console.log('the body', body)
  const userName = getVariable("user_name", body);
  const publicKey = getVariable("text", body);
  console.log("the username", userName);
  console.log("the publicKey", publicKey);
  const res = await handleList(userName.value, publicKey.value);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: res,
    }),
  });
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

module.exports = { main };

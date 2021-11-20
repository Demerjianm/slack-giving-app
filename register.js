const { getVariable, handleList, checkValidAddress } = require("./utils");

const main = async (event, context, callback) => {
  const body = event.body;
  console.log("the body", body);
  // get the username and public address out from slack message
  const userName = getVariable("user_name", body);
  const publicKey = getVariable("text", body);
  // check if the moonbeam address is valid
  const isValid = checkValidAddress(publicKey.value);
  console.log("isValid", isValid);
  if (isValid === false) {
    callback(null, {
      statusCode: 200,
      body: "The public address provided is not valid!"
    });
  } else {
    console.log("the username", userName);
    console.log("the publicKey", publicKey);
    // handle the username and publicKey in the database(s3 bucket)
    const res = await handleList(userName.value, publicKey.value);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: res
      })
    });
  }
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

module.exports = { main };

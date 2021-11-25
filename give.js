const { getVariable, getUserBalance } = require("./utils");

const handleGiveBody = body => {
  const userName = getVariable("user_name", body);
  const text = getVariable("text", body);
  const [receiver, amount] = text.value.split("+");
  return { sender: userName.value, receiver, amount };
};

const giveLogic = async body => {
  const bodyData = handleGiveBody(body);
  const balanceData = await getUserBalance(body);
  console.log({ bodyData, balanceData });
};

const main = (event, context, callback) => {
  console.log("give event", JSON.stringify(event, null, 2));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!"
      // input: event,
    })
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports = { main, handleGiveBody, giveLogic };

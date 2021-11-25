const { getWalletBalance, getUserBalance } = require("./utils");

const main = async (event, _, callback) => {
  try {
    console.log("balance event", JSON.stringify(event, null, 2));
    const body = event.body;
    console.log("the body", body);
    const userData = await getUserBalance(body);
    const { balance, publicKey } = userData;
    const walletBalance = await getWalletBalance(publicKey);
    const response = {
      statusCode: 200,
      body: `Your wallet balance is: ${walletBalance}, you have $${balance} left to give this month!`
    };

    callback(null, response);
  } catch (error) {
    const response = {
      statusCode: 200,
      body: `There was an error processing your request. Please try again if the problem persist download the repo and fix it. jk`
    };
    console.log("error", error);
    callback(null, response);
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports = { main };

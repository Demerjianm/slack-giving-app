// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require("aws-sdk");

require("dotenv").config();

const s3 = new AWS.S3({ region: "us-west-2" });

const getJsonObject = async ({ key }) => {
  const params = {
    Bucket: process.env.BUCKET,
    Key: key,
  };
  const res = await s3.getObject(params).promise();
  const abc = res.Body.toString("utf8");
  return JSON.parse(abc);
};

const handleList = async (
  userName = "michaeldemerjian",
  publicKey = "adsfsdfa"
) => {
  const userList = await getJsonObject({ key: "database.json" });
  console.log('before list', userList, userName, publicKey);
  if (userList.hasOwnProperty(userName)) {
    console.log("user already exists");
    return 'user already exists'
  } else {
    userList[userName] = publicKey;
    console.log("user added", userList);
    await putObject({
      body: JSON.stringify(userList),
      filename: "database.json",
    });
    return 'user added'
  }
};

const putObject = async ({ body, filename }) => {
  const params = {
    Body: body,
    Bucket: process.env.BUCKET,
    Key: filename,
    ContentDisposition: "inline",
    ContentType: "application/pdf",
    ACL: "bucket-owner-full-control",
  };

  const res = await s3.upload(params).promise();
  return res;
};

const getVariable = (variable = "text", text) => {
  const res = text.slice(
    text.indexOf(variable.concat("=")) + variable.length + 1,
    text.length
  );
  const finalRes = res.slice(0, res.indexOf("&"));
  console.log(finalRes);
  return { variable, value: finalRes };
};

module.exports = { getVariable, getJsonObject, putObject, handleList };

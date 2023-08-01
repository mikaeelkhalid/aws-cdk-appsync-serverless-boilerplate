const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

export const listNotes = async () => {
  const params = {
    TableName: process.env.NOTES_TABLE,
  };

  try {
    const data = await docClient.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.log('dynamodb err: ', error);
    return null;
  }
};


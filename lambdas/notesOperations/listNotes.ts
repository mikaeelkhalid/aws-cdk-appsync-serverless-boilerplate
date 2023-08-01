import { DynamoDB } from 'aws-sdk';

const docClient = new DynamoDB.DocumentClient();

export const listNotes = async () => {
  const params = {
    TableName: process.env.NOTES_TABLE as string,
  };

  try {
    const data = await docClient.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.log('dynamodb err: ', error);
    return null;
  }
};


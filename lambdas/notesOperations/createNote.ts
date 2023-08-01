const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import { Note } from '../types/Note';

export const createNote = async (note: Note) => {
  const params = {
    TableName: process.env.NOTES_TABLE,
    Item: note,
  };

  try {
    await docClient.put(params).promise();
    return note;
  } catch (error) {
    console.log('dynamodb err: ', error);
    return null;
  }
};


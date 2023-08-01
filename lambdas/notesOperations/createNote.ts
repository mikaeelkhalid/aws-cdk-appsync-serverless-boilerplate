import { DynamoDB } from 'aws-sdk';
import { Note } from '../types/Note';

const docClient = new DynamoDB.DocumentClient();

export const createNote = async (note: Note) => {
  const params = {
    TableName: process.env.NOTES_TABLE as string,
    Item: note,
  };

  try {
    const data = await docClient.put(params).promise();
    console.log('data', data);
    return note;
  } catch (error) {
    console.log('dynamodb err: ', error);
    return null;
  }
};


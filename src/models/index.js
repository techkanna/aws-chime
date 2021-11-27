// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Meeting, Attendee, Response } = initSchema(schema);

export {
  Todo,
  Meeting,
  Attendee,
  Response
};
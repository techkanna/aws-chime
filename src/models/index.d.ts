import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Response {
  readonly statusCode: string;
  readonly headers?: string;
  readonly body?: string;
  readonly isBase64Encoded?: string;
  constructor(init: ModelInit<Response>);
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MeetingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttendeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Meeting {
  readonly id: string;
  readonly meetingId: string;
  readonly title: string;
  readonly data: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Meeting, MeetingMetaData>);
  static copyOf(source: Meeting, mutator: (draft: MutableModel<Meeting, MeetingMetaData>) => MutableModel<Meeting, MeetingMetaData> | void): Meeting;
}

export declare class Attendee {
  readonly id: string;
  readonly attendeeId: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Attendee, AttendeeMetaData>);
  static copyOf(source: Attendee, mutator: (draft: MutableModel<Attendee, AttendeeMetaData>) => MutableModel<Attendee, AttendeeMetaData> | void): Attendee;
}
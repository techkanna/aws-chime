/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChimeMeeting = /* GraphQL */ `
  query CreateChimeMeeting($title: String, $name: String, $region: String) {
    createChimeMeeting(title: $title, name: $name, region: $region) {
      statusCode
      headers
      body
      isBase64Encoded
    }
  }
`;
export const joinChimeMeeting = /* GraphQL */ `
  query JoinChimeMeeting($meetingId: String, $name: String) {
    joinChimeMeeting(meetingId: $meetingId, name: $name) {
      statusCode
      headers
      body
      isBase64Encoded
    }
  }
`;
export const endChimeMeeting = /* GraphQL */ `
  query EndChimeMeeting($meetingId: String) {
    endChimeMeeting(meetingId: $meetingId) {
      statusCode
      headers
      body
      isBase64Encoded
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      meetingId
      title
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        meetingId
        title
        data
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      attendeeId
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        attendeeId
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createMeetingGraphQL = /* GraphQL */ `
  mutation CreateMeetingGraphQL(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeetingGraphQL(input: $input, condition: $condition) {
      meetingId
      title
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteMeetingGraphQL = /* GraphQL */ `
  mutation DeleteMeetingGraphQL(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeetingGraphQL(input: $input, condition: $condition) {
      meetingId
      title
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAttendeeGraphQL = /* GraphQL */ `
  mutation CreateAttendeeGraphQL(
    $input: CreateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    createAttendeeGraphQL(input: $input, condition: $condition) {
      attendeeId
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAttendeeGraphQL = /* GraphQL */ `
  mutation DeleteAttendeeGraphQL(
    $input: DeleteAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    deleteAttendeeGraphQL(input: $input, condition: $condition) {
      attendeeId
      name
      id
      createdAt
      updatedAt
    }
  }
`;

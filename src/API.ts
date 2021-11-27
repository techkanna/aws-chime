/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateMeetingInput = {
  meetingId: string,
  title: string,
  data: string,
  id?: string | null,
};

export type ModelMeetingConditionInput = {
  meetingId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelMeetingConditionInput | null > | null,
  or?: Array< ModelMeetingConditionInput | null > | null,
  not?: ModelMeetingConditionInput | null,
};

export type Meeting = {
  __typename: "Meeting",
  meetingId: string,
  title: string,
  data: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type DeleteMeetingInput = {
  id: string,
};

export type CreateAttendeeInput = {
  attendeeId: string,
  name: string,
  id?: string | null,
};

export type ModelAttendeeConditionInput = {
  attendeeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAttendeeConditionInput | null > | null,
  or?: Array< ModelAttendeeConditionInput | null > | null,
  not?: ModelAttendeeConditionInput | null,
};

export type Attendee = {
  __typename: "Attendee",
  attendeeId: string,
  name: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type DeleteAttendeeInput = {
  id: string,
};

export type Response = {
  __typename: "Response",
  statusCode: string,
  headers?: string | null,
  body?: string | null,
  isBase64Encoded?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo >,
  nextToken?: string | null,
};

export type ModelMeetingFilterInput = {
  meetingId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelMeetingFilterInput | null > | null,
  or?: Array< ModelMeetingFilterInput | null > | null,
  not?: ModelMeetingFilterInput | null,
};

export type ModelMeetingConnection = {
  __typename: "ModelMeetingConnection",
  items:  Array<Meeting >,
  nextToken?: string | null,
};

export type ModelAttendeeFilterInput = {
  attendeeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAttendeeFilterInput | null > | null,
  or?: Array< ModelAttendeeFilterInput | null > | null,
  not?: ModelAttendeeFilterInput | null,
};

export type ModelAttendeeConnection = {
  __typename: "ModelAttendeeConnection",
  items:  Array<Attendee >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMeetingGraphQLMutationVariables = {
  input: CreateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type CreateMeetingGraphQLMutation = {
  createMeetingGraphQL?:  {
    __typename: "Meeting",
    meetingId: string,
    title: string,
    data: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMeetingGraphQLMutationVariables = {
  input: DeleteMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type DeleteMeetingGraphQLMutation = {
  deleteMeetingGraphQL?:  {
    __typename: "Meeting",
    meetingId: string,
    title: string,
    data: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttendeeGraphQLMutationVariables = {
  input: CreateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type CreateAttendeeGraphQLMutation = {
  createAttendeeGraphQL?:  {
    __typename: "Attendee",
    attendeeId: string,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttendeeGraphQLMutationVariables = {
  input: DeleteAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type DeleteAttendeeGraphQLMutation = {
  deleteAttendeeGraphQL?:  {
    __typename: "Attendee",
    attendeeId: string,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChimeMeetingQueryVariables = {
  title?: string | null,
  name?: string | null,
  region?: string | null,
};

export type CreateChimeMeetingQuery = {
  createChimeMeeting?:  {
    __typename: "Response",
    statusCode: string,
    headers?: string | null,
    body?: string | null,
    isBase64Encoded?: string | null,
  } | null,
};

export type JoinChimeMeetingQueryVariables = {
  meetingId?: string | null,
  name?: string | null,
};

export type JoinChimeMeetingQuery = {
  joinChimeMeeting?:  {
    __typename: "Response",
    statusCode: string,
    headers?: string | null,
    body?: string | null,
    isBase64Encoded?: string | null,
  } | null,
};

export type EndChimeMeetingQueryVariables = {
  meetingId?: string | null,
};

export type EndChimeMeetingQuery = {
  endChimeMeeting?:  {
    __typename: "Response",
    statusCode: string,
    headers?: string | null,
    body?: string | null,
    isBase64Encoded?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetMeetingQueryVariables = {
  id: string,
};

export type GetMeetingQuery = {
  getMeeting?:  {
    __typename: "Meeting",
    meetingId: string,
    title: string,
    data: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetingsQuery = {
  listMeetings?:  {
    __typename: "ModelMeetingConnection",
    items:  Array< {
      __typename: "Meeting",
      meetingId: string,
      title: string,
      data: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetAttendeeQueryVariables = {
  id: string,
};

export type GetAttendeeQuery = {
  getAttendee?:  {
    __typename: "Attendee",
    attendeeId: string,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttendeesQueryVariables = {
  filter?: ModelAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendeesQuery = {
  listAttendees?:  {
    __typename: "ModelAttendeeConnection",
    items:  Array< {
      __typename: "Attendee",
      attendeeId: string,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

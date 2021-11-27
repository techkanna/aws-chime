
# quary - 1
```
type Todo @model {
  id: ID!
  name: String!
  description: String
}

```

## result - 1
``
GraphQL endpoint: https://capl3tiga5fznksxl46lwrz27u.appsync-api.us-east-2.amazonaws.com/graphql
GraphQL API KEY: da2-k5inkjrrk5as5a3vptsgngiy64

``
<hr>

# quary - 2

```
type Todo @model {
  id: ID!
  name: String!
  description: String
}

type Query {
  createChimeMeeting(title: String, name: String, region: String): Response @function(name: "reactSampleLambda-${env}")
  joinChimeMeeting(meetingId: String, name: String): Response @function(name: "reactSampleLambda-${env}")
  endChimeMeeting(meetingId: String): Response  @function(name: "reactSampleLambda-${env}")
}

type Response {
  statusCode: String!
  headers: String
  body: String
  isBase64Encoded: String
}
```
<hr>

## result - 2
``
GraphQL endpoint: https://capl3tiga5fznksxl46lwrz27u.appsync-api.us-east-2.amazonaws.com/graphql
GraphQL API KEY: da2-k5inkjrrk5as5a3vptsgngiy64

``
<hr>

# quary - 3

```
type Todo @model {
  id: ID!
  name: String!
  description: String
}

type Meeting @model(mutations: {create: "createMeetingGraphQL", delete: "deleteMeetingGraphQL"}, subscriptions: null) {
  meetingId: String!
  title: String!
  data: String!
}

type Attendee @model(mutations: {create: "createAttendeeGraphQL", delete: "deleteAttendeeGraphQL"}, subscriptions: null) {
  attendeeId: String!
  name: String!
}

type Query {
  createChimeMeeting(title: String, name: String, region: String): Response @function(name: "reactSampleLambda-${env}")
  joinChimeMeeting(meetingId: String, name: String): Response @function(name: "reactSampleLambda-${env}")
  endChimeMeeting(meetingId: String): Response  @function(name: "reactSampleLambda-${env}")
}

type Response {
  statusCode: String!
  headers: String
  body: String
  isBase64Encoded: String
}
```
## result - 3
``
GraphQL endpoint: https://capl3tiga5fznksxl46lwrz27u.appsync-api.us-east-2.amazonaws.com/graphql
GraphQL API KEY: da2-k5inkjrrk5as5a3vptsgngiy64

``
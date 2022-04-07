import {gql} from 'apollo-server';

export default gql`
  type Record {
    _id: ID!
    image: String
    content: String
    weather: Int
  }

  type Query {
    getRecord(_id: ID!): Record
    allRecord: [Record]
  }

  input RecordInput {
    image: String
    content: String
    weather: Int
  }

  type Mutation {
    createRecord(input: RecordInput): Record
    updateRecord(_id: ID!, input: RecordInput): Record
    deleteRecord(_id: ID!): Record
  }
`;

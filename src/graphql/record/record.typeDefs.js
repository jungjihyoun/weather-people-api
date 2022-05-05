import {gql} from 'apollo-server';

export default gql`
  type Record {
    _id: ID!
    image: String
    title: String
    content: String
    coat: String
    top: String
    bottom: String
    score: String
  }

  type Query {
    getRecord(_id: ID!): Record
    allRecord: [Record]
  }

  input RecordInput {
    image: String
    title: String
    content: String
    coat: String
    top: String
    bottom: String
    score: String
  }

  type Mutation {
    createRecord(input: RecordInput): Record
    updateRecord(_id: ID!, input: RecordInput): Record
    deleteRecord(_id: ID!): Record
  }
`;

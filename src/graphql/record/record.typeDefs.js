import {gql} from 'apollo-server';

export default gql`
  input IDetail {
    coat: String
    top: String
    bottom: String
    score: Int
  }

  type ITest {
    coat: String
    top: String
    bottom: String
    score: Int
  }

  type Record {
    _id: ID!
    title: String
    content: String
    detail: ITest
    image: [String]
    weather: [String]
  }

  type Query {
    getRecord(_id: ID!): Record
    allRecord: [Record]
  }

  input RecordInput {
    title: String
    content: String
    detail: IDetail
    image: [String]
    weather: [String]
  }

  input ImageInput {
    image: [String]
  }

  type Mutation {
    createRecord(input: RecordInput): Record
    uploadImage(_id: ID!, input: ImageInput): Record
    updateRecord(_id: ID!, input: RecordInput): Record
    deleteRecord(_id: ID!): Record
  }
`;

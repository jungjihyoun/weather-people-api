import {gql} from 'apollo-server';

// export default 활용해 gql typeDefs 내보내기
export default gql`
  type User {
    _id: ID!
    name: String!
    age: Int!
    gender: String!
  }

  type Query {
    getUser(_id: ID!): User
    allUser: [User]
  }

  input UserInput {
    name: String
    age: Int
    gender: String
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(_id: ID!, input: UserInput): User
    deleteUser(_id: ID!): User
  }
`;

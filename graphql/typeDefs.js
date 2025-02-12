const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    email: String!
    from: String!
    to: String!
    adults: Int!
    children: Int!
   
  }

  type Query {
    getBookings: [Booking]
    getBooking(id: ID!): Booking
  }

  type Mutation {
    addBooking(
      name: String!
      email: String!
      from: String!
      to: String!
      adults: Int!
      children: Int!
    ): Booking
  }
`;

module.exports = typeDefs;

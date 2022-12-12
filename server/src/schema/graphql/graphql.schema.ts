import { buildSchema } from "graphql";

const graphqlSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

export default graphqlSchema;

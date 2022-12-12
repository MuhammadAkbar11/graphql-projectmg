import express from "express";
import { graphqlHTTP } from "express-graphql";
import deserializeUser from "../middleware/deserializeUser";
import routes from "../routes";
import graphqlSchema from "../schema/graphql/graphql.schema";

const rootValue = {
  hello: () => "Hello, world!",
};

function createServer() {
  const app = express();

  app.use(express.json());

  app.use(deserializeUser);

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: graphqlSchema,
      rootValue: rootValue,
      graphiql: true,
    })
  );

  routes(app);

  return app;
}

export default createServer;

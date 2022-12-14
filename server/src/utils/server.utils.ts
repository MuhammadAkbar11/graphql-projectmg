import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "@schema/graphql/schema";
import deserializeUser from "@middleware/deserializeUser";
import routes from "../routes";
import appRoutes from "@appRoute";
import { MODE } from "@config/env.config";

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
      graphiql: MODE === "development",
    })
  );

  // routes(app);
  appRoutes(app);
  return app;
}

export default createServer;

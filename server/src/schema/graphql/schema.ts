import {
  findClientService,
  findOneClientService,
} from "@service/client.service";
import {
  findOneProjectService,
  findProjectService,
} from "@service/project.service";

import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      async resolve(parent, args) {
        // return clients.find(client => client.id === parent.clientId);
        return await findOneClientService({ _id: parent.clientId });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      async resolve(parent, args) {
        return await findProjectService({});
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        // return projects.find(project => project.id === args.id);
        return await findOneProjectService({ _id: args.id });
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      async resolve(parent, args) {
        return await findClientService({});
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await findOneClientService({ _id: args.id });
      },
    },
  },
});

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
});

export default graphqlSchema;

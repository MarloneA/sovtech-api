import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import TypePerson from "../types/index.js";
import { getPeopleResolver, getPersonResolver } from "../Resolvers/index.js";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    getPeople: {
      type: new GraphQLList(TypePerson),
      description: "All star wars characters",
      args: {
        page: {
          type: GraphQLString,
        },
      },
      resolve: getPeopleResolver,
    },
    getPerson: {
      type: TypePerson,
      description: "One star wars character",
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: getPersonResolver,
    },
  }),
});

export default new GraphQLSchema({ query: QueryType });

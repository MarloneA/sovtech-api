import { buildSchema } from "graphql";
import { getPeopleResolver, getPersonResolver } from "../Resolvers/index.js";

const schema = buildSchema(`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
  
  type Node {
    node: Person
  }

  type PageInfo {
    nextPage: String
    prevPage: String
    perPageCount: Int
  }

  type Edge {
    edges: [Node]
    pageInfo: PageInfo
  }
  
  type People {
    page: Edge
    totalCount: Int
  }

  type Query {
    getPeople(page: String): People
    getPerson(name: String): Person
  }
`);

export const root = {
  getPeople: ({ page }) => {
    return getPeopleResolver({ page });
  },
  getPerson: ({ name }) => {
    return getPersonResolver({ name });
  },
};

export default schema;

import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.BASE_URL;

export const getPeopleResolver = (args) =>
  fetch(`${url}/people/?page=${args.page ? args.page : "1"}`)
    .then((res) => res.json())
    .then((data) => {
      const { results, next, previous, count } = data;

      return {
        totalCount: count,
        page: {
          edges: results.map((result) => ({
            node: result,
          })),
          pageInfo: {
            nextPage: next,
            prevPage: previous,
            perPageCount: results.length,
          },
        },
      };
    });

export const getPersonResolver = (args) =>
  fetch(`${url}/people/?search=${args.name}`)
    .then((res) => res.json())
    .then((data) => {
      const { results } = data;
      return results[0];
    });

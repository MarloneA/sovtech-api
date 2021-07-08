import fetch from "node-fetch";

const url = process.env.BASE_URL || "https://swapi.dev/api/";

export const getPeopleResolver = (root, args) =>
  fetch(`${url}/people/?page=${args.page ? args.page : "1"}`)
    .then((res) => res.json())
    .then((data) => {
      const { results, next, previous, count } = data;
      return results;
    });

export const getPersonResolver = (root, args) =>
  fetch(`${url}/people/?search=${args.name}`)
    .then((res) => res.json())
    .then((data) => {
      const { results, next, previous, count } = data;
      return results[0];
    });

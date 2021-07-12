# Sovtech Api

## Getting Started

- Clone repo using : `https://github.com/MarloneA/sovtech-api.git`
- install app dependencies using `yarn install`
- run local server with `yarn start`
- navigate to `localhost:80` to interact with the api



## Features

- The api is served on the browser with a default graphql gui

- As a user I can:
  1. Query all characters from the Star Wars Universe 
  2. retrieve a single character by name
  3. View paginated resources from the api
  

## Sample Endpoints

* Query type that resolves all People as list of paginated resource
```
{
  getPeople(page: "1"){
    page {
      edges {
        node {
          name
          height
          mass
          gender
          homeworld
        }
      }
      pageInfo {
        prevPage
        nextPage
        perPageCount
      }
    }
    totalCount
  }
}

```

* Query type that resolves a character given their name
```
{
  getPerson(name: "Luke"){
      name
      height
      mass
      gender
      homeworld
  }
}
```

## Deployed API

API is hosted at [star wars api](https://aqueous-cliffs-79727.herokuapp.com/)


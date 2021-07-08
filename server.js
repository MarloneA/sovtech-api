import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import schema from "./app/schema/index.js";

// initialise express app
const app = express();

// handle cross origin requests
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  graphqlHTTP({
    graphiql: true,
    schema,
    pretty: true,
  })
);

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

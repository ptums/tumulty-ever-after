import { schema } from "./schema";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const Pages = require("../models/Pages");


// Initialize the app
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
// http://www.tumultyeverafter.com
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// Allow CORS between routes
app.use(cors(corsOptions));

// The GraphQL endpoint
app.use("/graphql", cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Load static resources for the client
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve up react app under home route
app.get("/", (req, res) => {
  const index = path.join(__dirname, "../client/build", "index.html");
  res.sendFile(index);
});

// Create pages 
function createPages() {
	const pages = [
     {
       link: "/events",
       title: "Events",
       content: "<p> Events pages content will go here..."
     },
     {
       link: "/rsvp",
       title: "RSVP",
       content: "<p> RSVP pages content will go here..."
     },
     {
       link: "/about-us",
       title: "About Us",
       content: "<p> About Us pages content will go here..."
     },
      {
       link: "/accomodations",
       title: "Accomodations",
       content: "<p>Accomodations pages content will go here..."
     },
     {
       link: "/registry",
       title: "Registry",
       content: "<p>Registry pages content will go here..."
     },
     {
       link: "/transportation",
       title: "Transportation",
       content: "<p>Transportation pages content will go here..."
     },
     

	];
	Pages.create(pages, function(err){
		console.log("pages created!");
	});
}
// Start the server
app.listen(port, () => {
  console.log(` Server running on: ${port}`);
});

var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example
// link': { type: String },
  // 'title': { type: String },
  // 'content': { type: String }
Pages.create([
  {
  	'link': 'about-us',
    'title': 'About Us',
    'content': '<h1>About us</h1>' 
  },
  {
  	'link': 'events',
    'title': 'Events',
    'content': '<h1>About us</h1>' 
  },
  {
  	'link': 'rsvp',
    'title': 'RSVP',
    'content': '<h1>RSVP</h1>' 
  },
  {
  	'link': 'accomodations',
    'title': 'Accomodations',
    'content': '<h1>Accomodations</h1>' 
  },
  {
  	'link': 'registry',
    'title': 'Registry',
    'content': '<h1>Registry</h1>' 
  },
  {
  	'link': 'transportation',
    'title': 'Transportation',
    'content': '<h1>Transportation</h1>' 
  }
])

// .then(() => {
//   console.log("Seed complete!")  
//   mongoose.connection.close();
// });

// be sure to close the connection once the queries are done


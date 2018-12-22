"use strict";

var Pages = require("../models/Pages");

// Create pages 
function createPages() {
  var pages = [{
    link: "/events",
    title: "Events",
    content: "<p> Events pages content will go here...</p>"
  }, {
    link: "/rsvp",
    title: "RSVP",
    content: "<p> RSVP pages content will go here...</p>"
  }, {
    link: "/about-us",
    title: "About Us",
    content: "<p> About Us pages content will go here...</p>"
  }, {
    link: "/accomodations",
    title: "Accomodations",
    content: "<p>Accomodations pages content will go here...</p>"
  }, {
    link: "/registry",
    title: "Registry",
    content: "<p>Registry pages content will go here...</p>"
  }, {
    link: "/transportation",
    title: "Transportation",
    content: "<p>Transportation pages content will go here...</p>"
  }];
  Pages.create(pages, function (err) {
    console.log("pages created!");
  });
}

function removeDuplicates(id) {
  Pages.remove({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("ID: " + id);
    }
  });
}
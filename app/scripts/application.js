requirejs.config({
  baseUrl: '/app/scripts',
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'handlebars': 'lib/handlebars',
    'handlebars.runtime': 'lib/handlebars.runtime'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'handlebars.runtime': {
      exports: 'Handlebars'
    }
  }
});


requirejs(['backbone', 'handlebars.runtime', 'app', 'routes', 'models', 'views', 'templates'],
function(Backbone, Handlebars, app, routes, models, views, templates){

  new app.routes();
  Backbone.history.start({pushState: true});

});


// Gets location data
// Querys Rotten tomatoes for local movies (with high ratings only)
// Displays videos with ("Ive seen this", "Get Tickets", "I dont ever want to see this", "Trailer")
// Stores info in localStorage

// handlebars views/templates/movie.handlebars -a -f scripts/templates.js
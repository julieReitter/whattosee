define(['backbone', 'app'], function(Backbone, app){

  app.routes = Backbone.Router.extend({
    routes: {
      '': 'init',
      ':place': 'app'
    },

    init: function() {
      // Creates a new user and checks for location
      // if location is not avaiable it directs to home
      var user = new app.models.user(), home;

      if (user.location) {
        this.navigate("/" + user.location);
      } else {
        home = new app.views.home(user);
        home.render();
      }
    },

    app: function(place) {
      var user, api, home, movies;
      // Iniliziales api model and updates data
      user = new app.models.user();
      user.set({location: place});

      api = new app.models.movies();
      api.fetch({dataType: 'jsonp', success: function(collection, response, options) {
        movies = new app.views.movies({movies: collection, user: user});
        movies.render();
      }});

      home = new app.views.home(user);
      home.render();
    }

  });

  return app.routes
});
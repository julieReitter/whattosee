define(['backbone', 'app'], function(Backbone, app){

  app.routes = Backbone.Router.extend({
    routes: {
      '': 'init',
    },

    init: function(place) {
      var user, api, movies;
      user = new app.models.user();

      // Iniliziales api model and updates data
      api = new app.models.movies();
      api.fetch({dataType: 'jsonp', success: function(collection, response, options) {
        movies = new app.views.movies({movies: collection, user: user});
        movies.render();
      }});
    }

  });

  return app.routes
});
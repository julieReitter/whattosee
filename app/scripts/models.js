define(['backbone', 'app'], function(backbone, app){

  app.models.user = Backbone.Model.extend({
    defaults: {
      location: undefined
    },

    initialize: function() {
      this.viewed = app.utils.storage('viewed') || [];
      this.ignore = app.utils.storage('ignore') || [];
      return this;
    },

    addTo: function(key, value) {
      // TODO: Check for duplication
      this[key].push(value);
      app.utils.storage(key, this[key]);
    }
  });


  app.models.movies = Backbone.Collection.extend({
    // api_key: "dvgqyaz4vvp5r9qbk78ys32t"
    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=dvgqyaz4vvp5r9qbk78ys32t',

    parse: function (data) {
      var accepted_props = ['id', 'posters', 'ratings', 'release_dates', 'runtime', 'synopsis', 'title'],
          movie_data, filter;

      movie_data = _.filter(data.movies, function(movie){
        filter = app.utils.isGood(movie);
        if (filter)
          movie = _.pick(movie, accepted_props);
        return filter;
      });

      return movie_data;
    },

    comparator: function(movie) {
      ratings = movie.get('ratings')
      return -ratings.critics_score;
    },

  });


  // Gets movie trailer from YouTube RSS Feed
  app.models.trailer = Backbone.Model.extend({
    urlRoot: function() {
      return "http://gdata.youtube.com/feeds/api/videos?q=" + this.get('title') + "&start-index=1&max-results=1&v=2&alt=json&hd";
    },

    parse: function(data) {
      var id_tag = data.feed.entry[0].id.$t,
          search = ':video:';
      return {video: id_tag.slice(id_tag.search(search) + search.length)};
    },

    embedUrl: function() {
      return "//www.youtube.com/embed/" + this.get('video');
    }
  })

  return app.models
});
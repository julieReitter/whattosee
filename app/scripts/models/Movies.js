define(['chaplin', 'helpers'], function(Chaplin, helpers){

  var Movie = Chaplin.Model.extend({
    store: function(prop, key) {
      helpers.session.user.addTo(prop, this.get(key));
    }
  });

  var Movies = Chaplin.Collection.extend({
    model: Movie,
    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=dvgqyaz4vvp5r9qbk78ys32t',

    parse: function (data) {
      var accepted_props = ['id', 'posters', 'ratings', 'release_dates', 'runtime', 'synopsis', 'title'],
          movie_data, filter;

      movie_data = _.filter(data.movies, function(movie){
        filter = helpers.utils.isGood(movie);
        if (filter)
          movie = _.pick(movie, accepted_props);
        return filter;
      });

      return movie_data;
    },

    comparator: function(movie) {
      ratings = movie.get('ratings')
      return -ratings.critics_score;
    }

  });

  return Movies;

});

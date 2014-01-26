define([
    'chaplin',
    'models/user',
    'models/Movies',
    'views/MovieCollectionView'
], function(Chaplin, User, Movies, MovieCollectionView){

    var MoviesController = Chaplin.Controller.extend({
        index: function() {
            var user, movies, view;
            user = new User();
            movies = new Movies();
            movies.fetch({
                dataType: 'jsonp',
                success: function(collection, response, options) {
                    view = new MovieCollectionView({collection: collection, user: user});
                    view.renderAllItems();
                }
            });
        }
    });

    return MoviesController;
});

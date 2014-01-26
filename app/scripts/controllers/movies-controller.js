define([
    'chaplin',
    'models/user',
    'models/Movies',
    'views/MovieCollectionView'
], function(Chaplin, User, Movies, MovieCollectionView){

    var MoviesController = Chaplin.Controller.extend({
        index: function() {
            var movies, view;
            movies = new Movies();
            movies.fetch({
                dataType: 'jsonp',
                success: function(collection, response, options) {
                    view = new MovieCollectionView({collection: collection});
                    view.renderAllItems();
                }
            });
        }
    });

    return MoviesController;
});

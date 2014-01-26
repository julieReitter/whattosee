define([
    'chaplin',
    'helpers',
    'views/MovieView',
], function(Chaplin, helpers, MovieView){

    var MovieCollectionView = Chaplin.CollectionView.extend({
        container: '#movies-container',
        tagName: 'ul',
        className: 'movie-list',
        itemSelector: '.movie-list',
        itemView: MovieView,
        autoRender: true,

        filterer: function(item, index) {
            var list = _.compact(_.union(helpers.session.user.viewed, helpers.session.user.ignore));
            return !_.contains(list, item.get('id'));
        }
    });

    return MovieCollectionView;
});

define([
    'chaplin',
    'views/MovieView',
], function(Chaplin, MovieView){

    var MovieCollectionView = Chaplin.CollectionView.extend({
        container: '#movies-container',
        tagName: 'ul',
        className: 'movie-list',
        itemSelector: '.movie-list',
        itemView: MovieView,
        autoRender: true,

        initialize: function(options) {
            this.user = options.user;
            Chaplin.CollectionView.prototype.initialize.apply(this, options);
        },

        filterer: function(item, index) {
            var list = _.compact(_.union(this.user.viewed, this.user.ignore));
            return !_.contains(list, item.get('id'));
        }
    });

    return MovieCollectionView;
});

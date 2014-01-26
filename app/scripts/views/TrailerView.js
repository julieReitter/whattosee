define([
    'chaplin',
    'handlebars.runtime',
    'models/Trailer'
], function(Chaplin, Handlebars, Trailer){

  var TrailerView = Chaplin.View.extend({
    el: '#trailer-container',

    events: {
      'click': 'close'
    },

    initialize: function(movie) {
      // Initialize Trailer model and fetch trailer from youtube;
      var self = this;
      this.trailer = new Trailer(movie);
      this.trailer.fetch({
        dataType: 'jsonp',
        success: function() {
          self.render();
        }
      });
    },

    render: function(model, response, options) {
      this.$el.find('iframe').attr('src', this.trailer.embedUrl());
      this.$el.show();
    },

    close: function(event) {
      this.$el.hide();
      this.undelegateEvents();
    }
  });

  return TrailerView;
});

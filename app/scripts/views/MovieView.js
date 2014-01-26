define([
    'chaplin',
    'handlebars.runtime',
    'views/TrailerView'
], function(Chaplin, Handlebars, TrailerView){

    var MovieView = Chaplin.View.extend({

        tagName: 'li',

        events: {
          'click .js-viewed': 'setViewed',
          'click .js-ignore': 'setIgnore',
          'click .js-trailer': 'getTrailer',
          'click .js-extra': 'getExtra'
        },

        getTemplateFunction: function() {
          return Handlebars.templates.movie;
        },

        getTemplateData: function() {
          return this.model.toJSON();
        },

        addToStorage: function(prop) {
          event.preventDefault();
          id = $(event.target).closest('.movie').data('id');
          this.model.store(prop, 'id');
          this.render();
        },

        setViewed: function() { this.addToStorage('viewed'); },
        setIgnore: function() { this.addToStorage('ignore'); },

        getTrailer: function(event) {
          event.preventDefault();
          var name = $(event.target).closest('.js-trailer').data('trailer');
          new TrailerView({title: name});
        },

        getExtra: function(event) {
          // TODO: this is really ugly
          event.preventDefault();

          var $target = $(event.target),
              $details = $target.closest('.movie--details'),
              expanded = $target.data('expanded'),
              value = expanded ? 'nowrap':'normal',
              align = expanded ? 'middle':'top',
              icon = expanded ? '&raquo': '&laquo',
              display = expanded ? 'none': 'block';

          $details.find('.movie--snippet').css('white-space', value);
          $details.find('.movie--rating').css('vertical-align', align);
          $details.find('.movie--extra-btn').html(icon);
          $details.find('.movie--showtime').css({display: display});
          $target.data('expanded', !expanded);
        }

    });

    return MovieView;
});

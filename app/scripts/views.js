define(['backbone', 'app', 'handlebars.runtime'],
function(backbone, app, Handlebars){

  // Input for searching location
  app.views.home = Backbone.View.extend({
    el: '#app-container',
    template: _.template("<input type='text' class='js-location' value='<%= location %>' placeholder='Enter City or Zip'/> <button class='js-search' button>Search</button>"),
    events: {
      "click .js-search": "search"
    },

    initialize: function(user) {
      this.model = user;
    },

    render: function() {
      data = this.model.toJSON();
      this.$el.html(this.template(data));
      return this;
    },

    search: function(event) {
      place = this.$el.find('.js-location').val();
      route = new app.routes()
      route.navigate('/' + place, {trigger: true});
    }
  });


  app.views.movies = Backbone.View.extend({
    el: '#movies-container',
    events: {
      'click .js-viewed': 'setViewed',
      'click .js-ignore': 'setIgnore',
      'click .js-trailer': 'getTrailer',
      'click .js-extra': 'getExtra'
    },

    template: function (data) {
      return Handlebars.templates.movies(data)
    },

    initialize: function(data) {
      this.movies = data.movies;
      this.user = data.user;
    },

    render: function() {
      data = {movies: this.filterMovies()};
      this.$el.html(this.template(data));
    },

    filterMovies: function() {
      self = this;
      filtered =  _.filter(this.movies.toJSON(), function(movie){
        list = _.compact(_.union(self.user.viewed, self.user.ignore));
        exclude = _.findWhere(list, {id: movie.id});
        return !exclude;
      }) ;
      return filtered;
    },

    addToStorage: function(prop) {
      event.preventDefault();
      id = $(event.target).closest('.movie').data('id');
      this.user.addTo(prop, this.movies.get(id));
      this.render();
    },

    setViewed: function() { this.addToStorage('viewed'); },
    setIgnore: function() { this.addToStorage('ignore'); },

    getTrailer: function(event) {
      event.preventDefault();
      var name = $(event.target).closest('.js-trailer').data('trailer');
      new app.views.trailer({title: name});
    },

    getExtra: function(event) {
      event.preventDefault();

      var $target = $(event.target),
          $details = $target.closest('.movie--details'),
          expanded = $target.data('expanded'),
          value = expanded ? 'nowrap':'normal',
          align = expanded ? 'middle':'top',
          icon = expanded ? '&raquo': '&laquo';

      $details.find('.movie--snippet').css('white-space', value);
      $details.find('.movie--rating').css('vertical-align', align);
      $details.find('.movie--extra-btn').html(icon);
      $target.data('expanded', !expanded);
    }
  });


  app.views.movie = Backbone.View.extend({
    el: '.movie--extras',

    initialize: function(data) {

    }
  });


  app.views.trailer = Backbone.View.extend({
    el: '#trailer-container',

    events: {
      'click': 'close'
    },

    initialize: function(movie) {
      // Initialize Trailer model and fetch trailer from youtube;
      var self = this;
      this.trailer = new app.models.trailer(movie);
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


});
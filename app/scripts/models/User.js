define(['chaplin', 'helpers'], function(Chaplin, helpers){

  var User = Chaplin.Model.extend({
    defaults: {
      location: undefined
    },

    initialize: function() {
      this.viewed = helpers.utils.storage('viewed') || [];
      this.ignore = helpers.utils.storage('ignore') || [];
      return this;
    },

    addTo: function(key, value) {
      // TODO: Check for duplication
      this[key].push(value);
      helpers.utils.storage(key, this[key]);
    }
  });

  return User;

});

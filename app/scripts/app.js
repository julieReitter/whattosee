define([
    'backbone',
    'chaplin',
    'handlebars.runtime',
    'templates',
    'helpers',
    'models/User'
], function(Backbone, Chaplin, Handlebars, templates, helpers, User) {

    var Application = Chaplin.Application.extend({
        title: 'What To See',
        start: function() {
            helpers.session.user = new User();
            Chaplin.Application.prototype.start.apply(this);
        }
    });

    return Application;
});

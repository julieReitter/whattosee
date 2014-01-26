requirejs.config({
  baseUrl: '/app/scripts',
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'handlebars': 'lib/handlebars',
    'handlebars.runtime': 'lib/handlebars.runtime',
    'chaplin': '../components/chaplin/chaplin'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'chaplin': {
      exports: 'Chaplin'
    },
    'underscore': {
      exports: '_'
    }   ,
    'jquery': {
      exports: '$'
    },
    'handlebars.runtime': {
      exports: 'Handlebars'
    },
    'templates': {
        deps: ['handlebars.runtime']
    }
  }
});

require(['app', 'routes'], function(Application, routes){
    new Application({routes: routes, controllerSuffix: '-controller'});
});

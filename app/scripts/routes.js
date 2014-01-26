define(['backbone', 'app'], function(Backbone, app){
    return function(match) {
        match('', 'movies#index');
    }
});

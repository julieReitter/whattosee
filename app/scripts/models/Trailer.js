define(['chaplin'], function(Chaplin){

  var Trailer = Chaplin.Model.extend({
    urlRoot: function() {
      return "http://gdata.youtube.com/feeds/api/videos?q=" + this.get('title') + "&start-index=1&max-results=1&v=2&alt=json&hd";
    },

    parse: function(data) {
      var id_tag = data.feed.entry[0].id.$t,
          search = ':video:';
      return {video: id_tag.slice(id_tag.search(search) + search.length)};
    },

    embedUrl: function() {
      return "//www.youtube.com/embed/" + this.get('video');
    }
  });

  return Trailer;

});

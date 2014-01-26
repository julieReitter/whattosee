define({
  session: {},
  utils: {
    isGood: function(movie) {
      var good = movie.ratings.critics_score > 75;
      if (movie.ratings.audience_score > 85)
        good = true;
      return good;
    },
    storage: function(key, value) {
      prefix = 'what_to_see:';
      if (typeof(Storage)!=="undefined") {
        if (value) {
          return localStorage.setItem(prefix + key, JSON.stringify(value));
        } else {
          return JSON.parse(localStorage.getItem(prefix + key));
        }
      } else {
        console.error('No Support for Storage');
      }
    }

  }
});

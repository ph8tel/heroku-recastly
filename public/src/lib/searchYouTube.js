var searchYouTube = (options, callback) => {
  var finalResponse;
  if (options === undefined) {
    var key = window.YOUTUBE_API_KEY;
    var query = 'Surfing';
    var max = 5;
  } else {
    var key = options.key || window.YOUTUBE_API_KEY;
    var query = options.query || 'Surfing';
    var max = options.max || 5;
  }

  // var key = !!(options.key) ? options.key : window.YOUTUBE_API_KEY;
  //   var query = !!options.query ? options.query : 'Surfing';
  //   var max = !!options.max ? options.max : 5;

  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: query,
      type: 'video',
      videoEmbeddable: true,
      maxResults: max,
      part: 'snippet',
      key: key
    }
  }).done(function (response) {
    callback(response.items);
  });
};

window.searchYouTube = searchYouTube;

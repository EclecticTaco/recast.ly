var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true

    },
    success: (data) => {
      console.log(data);
      callback(data.items);
    },
    error: (error) => {
      console.error('Could not retrieve messages');
    }
  });
};

export default searchYouTube;



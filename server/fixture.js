if (Posts.find().count() === 0) {
  Posts.insert({
    title: '#1',
    streamURL: 'http://jjwc.cafe24.com:8000/mpd.ogg'
  });

  Posts.insert({
    title: '#2',
    streamURL: 'http://jjwc.cafe24.com:8000/mpd.ogg'
  });

  Posts.insert({
    title: '#3',
    streamURL: 'http://jjwc.cafe24.com:8000/mpd.ogg'
  });
}

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: 'Gypsophila',
        artist: 'MoreanP',
        url: 'http://music.163.com/song/media/outer/url?id=517346741.mp3',
        cover: '/images/music/Gypsophila.jpg',
      },
    {
        name: '星茶会',
        artist: '灰澈',
        url: 'http://music.163.com/song/media/outer/url?id=492390949.mp3',
        cover: '/images/music/星茶会.jpg',
      },
    {
        name: 'Afterglow',
        artist: 'Saiakoup',
        url: 'http://music.163.com/song/media/outer/url?id=530397372.mp3',
        cover: '/images/music/Afterglow.jpg',
      }
    ]
});
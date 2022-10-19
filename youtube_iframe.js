var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'M7lc1UVf-VE',
    });
}




var done = false;
function onPlayerStateChange(event) {
    console.log('Call StateChange')
    if (event.data == YT.onPlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 5000);

    }
}
function onPlayerStateChange(event) {
    console.log('Call StateChange')
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 5000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
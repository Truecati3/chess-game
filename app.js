const mp3List = document.getElementById('mp3-list');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');

mp3List.addEventListener('click', e => {
  e.preventDefault(); // prevent default link behavior
  const mp3Url = e.target.href;
  audioSource.src = mp3Url;
  audioPlayer.load();
  audioPlayer.play();
});

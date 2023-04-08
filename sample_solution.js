
function playlistLength(playlist) {
    
let totalLength = 0;
for (let i = 0; i < playlist.length; i++) {
totalLength += playlist[i];
}
const minutes = Math.floor(totalLength / 60);
const seconds = totalLength % 60;
  
return `${minutes}:${seconds.toString().padStart(2, '0')}`;

}
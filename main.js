/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:
export function playlistStats(playlist) {
    const numSongs = playlist.length;
    let totalLength = 0;
    for (let i = 0; i < playlist.length; i++) {
      totalLength += playlist[i];
    }
    const minutes = Math.floor(totalLength / 60);
    const seconds = totalLength % 60;
  
    return {numSongs, `${minutes}:${seconds.toString().padStart(2, '0')}`};
};

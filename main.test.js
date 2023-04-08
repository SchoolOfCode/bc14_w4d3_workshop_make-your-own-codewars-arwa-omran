//👉 Write your tests below here:
import { playlistStats } from './main.js';
    describe('playlistStats', () => {
        test('calculates playlist stats correctly', () => {
          const playlist = [180, 240, 300];
          const expected = { numSongs: 3, length: "12:00" };
          const result = playlistStats(playlist);
          expect(result).toEqual(expected);
        });
      
        test('handles empty playlist', () => {
          const playlist = [];
          const expected = { numSongs: 0, length: "0:00" };
          const result = playlistStats(playlist);
          expect(result).toEqual(expected);
        });
      
        test('handles single-song playlist', () => {
          const playlist = [180];
          const expected = { numSongs: 1, length: "3:00" };
          const result = playlistStats(playlist);
          expect(result).toEqual(expected);
        });
      
        test('handles playlist with multiple songs less than one minute in length', () => {
          const playlist = [30, 45, 20];
          const expected = { numSongs: 3, length: "1:35" };
          const result = playlistStats(playlist);
          expect(result).toEqual(expected);
        });
      });
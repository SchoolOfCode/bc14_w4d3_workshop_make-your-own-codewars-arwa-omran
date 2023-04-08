//👉 Write your tests below here:
import { playlistLength } from './main.js';
import { expect, test } from '@jest/globals';

describe('playlistLength', () => {
    test('calculates total length of playlist correctly', () => {
      const playlist = [180, 210, 300];
      const expected = "11:30";
      const result = playlistLength(playlist);
      expect(result).toBe(expected);
    });
  
    test('handles empty playlist', () => {
      const playlist = [];
      const expected = "0:00";
      const result = playlistLength(playlist);
      expect(result).toBe(expected);
    });
  
    test('handles single-song playlist', () => {
      const playlist = [180];
      const expected = "3:00";
      const result = playlistLength(playlist);
      expect(result).toBe(expected);
    });
  
    test('handles playlist with multiple songs less than one minute in length', () => {
      const playlist = [30, 45, 20];
      const expected = "1:35";
      const result = playlistLength(playlist);
      expect(result).toBe(expected);
    });

    test('handles playlist with more than 3 songs', () => {
      const playlist = [182, 215, 305, 139, 211, 303, 180, 297, 210, 300];
      const expected = "39:02";
      const result = playlistLength(playlist);
      expect(result).toBe(expected);
    });
  });
  
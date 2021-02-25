import { Progression, Scale } from '../constants/models';

export const getChordProgression = (key: number, mode: number, length: number): Progression => {


  const p: Progression = {
    Key: 'C',
    Mode: 'Aoelian',
    Length: '2',
    Chords: [{ Note: 'C', Type: 'Major' }]
  }

  return p;
}
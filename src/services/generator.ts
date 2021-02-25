import { majorScale } from '../constants/maps';
import { Chord, Progression, Scale } from '../constants/models';

export const getChordProgression = (key: number, mode: number, length: number): Progression => {


  const p: Progression = {
    Key: 'C',
    Mode: 'Aoelian',
    Length: '2',
    Chords: [{ Note: 'C', Type: 'Major' }]
  }

  return p;
}

export const getModalChords = (mode: number) => {
  if (mode === 1) {
    return majorScale;
  }

  const modalScale: string[] = [];
  let degree = 0;

  for (let i = mode; i < Object.keys(majorScale).length; i++) {
    modalScale[degree - 1] = majorScale[i];
    degree++;
  }

  for (let i = 1; i < mode; i++) {
    modalScale[degree - 1] = majorScale[i];
    degree++;
  }

  return modalScale;
}


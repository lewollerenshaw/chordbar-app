import { majorScale } from './constants/maps';
import { Progression } from './constants/models';

export const getChordProgression = (
  key: number,
  mode: number,
  length: number,
  isDiminished: boolean,
  resolveRoot: boolean): Progression => {
  const p: Progression = {
    Key: 'C',
    Mode: 'Aoelian',
    Length: '2',
    Chords: [{ Note: 'C', Type: 'Major' }]
  }

  return p;
}

export const getModalChords = (mode: number) => {
  if (mode === 0) {
    return majorScale;
  }

  const precedingScale = majorScale.slice(0, mode);
  const modalScale = majorScale.slice(mode);

  precedingScale.forEach(chord => {
    modalScale.push(chord);
  });

  return modalScale;
}


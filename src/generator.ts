import { majorScale, scaleSteps } from './constants/maps';
import { Progression } from './constants/models';

export const getChordProgression = (
  key: number,
  mode: number,
  length: number,
  isDiminished: boolean,
  resolveRoot: boolean): Progression => {
  console.log(getModalChords(mode));

  console.log(getModalSteps(mode));

  const p: Progression = {
    Key: 'C',
    Mode: 'Aoelian',
    Length: '2',
    Chords: [{ Note: 'C', Type: 'Major' }]
  }

  return p;
};

const getModalChords = (mode: number) => {
  if (mode === 0) {
    return majorScale;
  }

  const precedingScaleChords = majorScale.slice(0, mode);
  const modalScale = majorScale.slice(mode);

  precedingScaleChords.forEach(chord => {
    modalScale.push(chord);
  });

  return modalScale;
};

const getModalSteps = (mode: number) => {
  if (mode === 0) {
    return scaleSteps;
  }

  const precedingSteps = scaleSteps.slice(0, mode);
  const modalSteps = scaleSteps.slice(mode);

  precedingSteps.forEach(step => {
    modalSteps.push(step);
  });

  return modalSteps;
}


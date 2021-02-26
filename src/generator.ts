import { ChordType } from './constants/enums';
import { majorScale, notes, scaleSteps, modes } from './constants/maps';
import { Chord, Progression } from './constants/models';

export const getChordProgression = (
  key: number,
  mode: number,
  length: number,
  isDiminished: boolean,
  resolveRoot: boolean): Progression => {
  const chords = getModalChords(mode);
  const steps = getModalSteps(mode);
  const modalNotes = getModalNotes(key, steps);
  const scale = mapModalScale(modalNotes, chords);
  const progression = buildChordProgression(scale, length, resolveRoot, isDiminished);

  return {
    Key: notes[key],
    Mode: modes[mode],
    Length: length,
    Chords: progression
  };
};

const getModalChords = (mode: number) => {
  if (mode === 0) {
    return majorScale;
  }

  const precedingScaleChords = majorScale.slice(0, mode);
  const modalChords = majorScale.slice(mode);

  precedingScaleChords.forEach(chord => {
    modalChords.push(chord);
  });

  return modalChords;
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

const getModalNotes = (key: number, modalSteps: number[]) => {
  let root = key;
  const modalNotes: string[] = [];

  for (let i = 0; i < 7; i++) {
    modalNotes[i] = notes[root];
    root += modalSteps[i];
  }

  return modalNotes;
}

const mapModalScale = (notes: string[], chords: string[]) => {
  const modalScale: Chord[] = [];

  for (let i = 0; i < 7; i++) {
    const chord: Chord = {
      Note: notes[i],
      Type: chords[i]
    };

    modalScale[i] = chord;
  }

  return modalScale;
}

const buildChordProgression = (
  chords: Chord[],
  length: number,
  resolveRoot: boolean,
  isDiminished: boolean) => {
  const progression: Chord[] = [];

  if (resolveRoot) {
    const root: Chord = {
      Note: chords[0].Note,
      Type: chords[0].Type
    }

    progression.push(root);
  }

  for (let i = progression.length; i < length; i++) {
    if (isDiminished) {
      const rand = Math.floor(Math.random() * 7);
      const chord = chords[rand];

      progression[i] = chord;
    }

    else {
      let isValidChord = false;

      do {
        const rand = Math.floor(Math.random() * 6);
        const chord = chords[rand];

        if (chord.Type !== ChordType.Diminished) {
          progression[i] = chord;
          isValidChord = true;
        }
      }
      while (!isValidChord)
    }
  }

  return progression;
}
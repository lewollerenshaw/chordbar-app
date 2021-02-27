export interface Chord {
    Note: string,
    Type: string,
    Degree: string
};

export interface Progression {
    Key: string,
    Mode: string,
    Length: number,
    Chords: Chord[]
};

export interface Scale {
    Key: string,
    Mode: string,
    Chords: Chord[]
};
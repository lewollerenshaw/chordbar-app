export interface Chord {
    Note: string,
    Type: string
};

export interface Progression {
    Key: string,
    Mode: string,
    Length: string,
    Chords: Chord[]
};

export interface Scale {
    Key: string,
    Mode: string,
    Chords: Chord[]
};
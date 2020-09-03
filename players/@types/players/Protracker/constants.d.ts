import { WaveType } from "./models/WaveType.interface";
export declare const AMIGA_CLOCK_SPEED_NTSC = 7159090.5;
export declare const AMIGA_CLOCK_SPEED_PAL = 7093789.2;
export declare enum AMIGA_CLOCK_SPEED {
    NTSC,
    PAL
}
export declare const EFFECT_CODES: {
    ARPEGGIO: string;
    PORTAMENTO_UP: string;
    PORTAMENTO_DOWN: string;
    TONE_PORTAMENTO: string;
    VIBRATO: string;
    VOLUME_SLIDE_TONE_PORTAMENTO: string;
    VOLUME_SLIDE_VIBRATO: string;
    TREMOLO: string;
    SET_PANNING_POSITION: string;
    SET_SAMPLE_OFFSET: string;
    VOLUME_SLIDE: string;
    POSITION_JUMP: string;
    SET_VOLUME: string;
    PATTERN_BREAK: string;
    SET_FILTER: string;
    FINE_PORTAMENTO_UP: string;
    FINE_PORTAMENTO_DOWN: string;
    GLISSANDO: string;
    SET_VIBRATO_WAVEFORM: string;
    SET_FINE_TUNE: string;
    PATTERN_LOOP: string;
    SET_TREMOLO_WAVEFORM: string;
    RETRIGGER_NOTE: string;
    FINE_VOLUME_SLIDE_UP: string;
    FINE_VOLUME_SLIDE_DOWN: string;
    NOTE_CUT: string;
    NOTE_DELAY: string;
    PATTERN_DELAY: string;
    FUNKREPEAT: string;
    SET_SPEED: string;
};
export declare const WAVE_TYPES: WaveType[];
export declare const UNKNOWN_FORMAT = "Unknown format";

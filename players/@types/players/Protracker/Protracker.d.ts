import * as protrackerConstants from './constants';
import * as appConstants from '../../constants';
import { Instruction } from './models/Instruction.interface';
import { Sample } from './models/Sample.interface';
import Player from "../Player/Player";
import ProtrackerChannel from "./ProtrackerChannel";
export declare type Song = {
    channelCount: number;
    patternCount: number;
    patterns: Instruction[][][];
    patternSequence: number[];
    rowsPerPattern: number;
    samples: Sample[];
    signature: string;
    songLength: number;
    songLoop: number | undefined;
    title: string;
};
export declare type State = {
    currentBufferSamplePosition: number;
    currentPatternSequenceIndex: number;
    currentRowIndex: number;
    currentSubtrack: number;
    currentTickSamplePosition: number;
    currentTick: number;
    patternDelay: number;
    patternLoopCount: number;
    patternLoopRowIndex: number;
    rowsPerBeat: number;
    samplesPerTick: number;
    speed: number;
    tempo: number;
};
export declare const defaultState: {
    currentBufferSamplePosition: number;
    currentPatternSequenceIndex: number;
    currentRowIndex: number;
    currentSubtrack: number;
    currentTickSamplePosition: number;
    currentTick: number;
    patternDelay: number;
    patternLoopCount: number;
    patternLoopRowIndex: number;
    rowsPerBeat: number;
    samplesPerTick: number;
    speed: number;
    tempo: number;
};
export default class Protracker extends Player {
    amigaClockSpeed: number;
    channels: ProtrackerChannel[];
    song: Song;
    state: State;
    constructor(audioContext: AudioContext, fileData: ArrayBuffer);
    /****************************
     *     Public functions     *
     ****************************/
    getChannels(): ProtrackerChannel[];
    getPatternDelay(): number;
    getPatternLoopCount(): number;
    getPatternLoopRowIndex(): number;
    getPlaybackState(): State;
    getPlaybackStatus(): appConstants.PlayerStatus;
    getRowPosition(): number;
    getSong(): Song;
    getSongLoopIndex(): number | undefined;
    hasSubtracks(): boolean;
    nextPattern(): boolean;
    nextRow(): boolean;
    nextSubtrack(): boolean;
    nextTick(): boolean;
    pause(): boolean;
    play(): boolean;
    previousPattern(): boolean;
    previousRow(): boolean;
    previousSubtrack(): boolean;
    previousTick(): boolean;
    reset(): void;
    setAmigaClockSpeed(clockSpeed: protrackerConstants.AMIGA_CLOCK_SPEED): void;
    setPatternDelay(ticks: number): void;
    setPatternLoopCount(count: number): void;
    setPatternLoopRowIndex(index: number): void;
    setPatternSequenceIndex(index: number | undefined, zeroOnFail?: boolean): boolean;
    setRowIndex(index: number): boolean;
    setSpeed(speed: number): void;
    setSubtrack(index: number): boolean;
    setTempo(tempo: number): void;
    setTick(tick: number): boolean;
    skipToPosition(newPosition: number): boolean;
    /***************************
     *     Event functions     *
     ***************************/
    onAudioProcess(channelBuffers: Float32Array[]): boolean;
    /*****************************
     *     Private functions     *
     *****************************/
    private _assignInstructionsToChannels;
    private _calculateNumberOfSamplesToGenerate;
    private _calculateSamplesPerTick;
    private _fillBuffers;
    private _getCurrentPattern;
    private _getCurrentRow;
    private _goToNextPosition;
    private _isBufferFull;
    private _isDelayed;
    private _isEndOfRow;
    private _isEndOfTick;
    private _isStartofRow;
    private _isStartOfTick;
    private _processEffects;
    private _setupChannels;
}

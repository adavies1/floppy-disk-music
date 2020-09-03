import { EffectCode } from './models/EffectCode.interface';
import { Instruction } from './models/Instruction.interface';
import { Sample } from './models/Sample.interface';
import ProtrackerOscillator from './ProtrackerOscillator';
export declare type state = {
    effect: EffectCode | undefined;
    fineTune: number;
    frequency: number;
    instruction: Instruction | undefined;
    originalPeriod: number;
    fineTunedPeriod: number;
    period: number;
    sample: Sample | undefined;
    sampleHasEnded: boolean;
    sampleIncrement: number;
    samplePosition: number;
    slideRate: number;
    slideTarget: number;
    tremolo: ProtrackerOscillator;
    vibrato: ProtrackerOscillator;
    volume: number;
};
export default class ProtrackerChannel {
    amigaClockSpeed: number;
    bufferFrequency: number;
    state: state;
    constructor(bufferFrequency: number, amigaClockSpeed: number);
    /****************************
     *     Public functions     *
     ****************************/
    fillBuffer(buffer: Float32Array, bufferStart: number, samplesToGenerate: number): void;
    getEffect(): EffectCode | undefined;
    getFineTune(): number;
    getInstruction(): Instruction | undefined;
    getOriginalPeriod(): number;
    getFineTunedPeriod(): number;
    getPeriod(): number;
    getSample(): Sample | undefined;
    getSamplePosition(): number;
    getSlideRate(): number;
    getSlideTarget(): number;
    getTremolo(): ProtrackerOscillator;
    getVibrato(): ProtrackerOscillator;
    getVolume(): number;
    reset(): void;
    resetFineTune(): void;
    resetPeriod(): void;
    resetSample(): void;
    resetVolume(): void;
    setFineTune(fineTune: number): void;
    setInstruction(instruction: Instruction): void;
    setOriginalPeriod(period: number): void;
    setPeriod(period: number): void;
    setSample(sample: Sample): void;
    setSampleAsEnded(): void;
    setSamplePosition(position: number): void;
    setSlideRate(rate: number): void;
    setSlideTarget(target: number): void;
    setVolume(volume: number): void;
    /*****************************
     *     Private functions     *
     *****************************/
    _calculateFrequency(): void;
    _calculateFineTunedPeriod(): void;
    _calculateSampleIncrement(): void;
    _getSampleValue(): number;
    _incrementSamplePosition(): void;
}

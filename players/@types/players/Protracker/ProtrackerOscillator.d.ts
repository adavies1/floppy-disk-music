import { Oscillator } from './models/Oscillator.interface';
import { WaveGenerator } from './models/WaveGenerator.interface';
import { WaveType } from './models/WaveType.interface';
export default class ProtrackerOscillator implements Oscillator {
    amplitude: number;
    offset: number;
    originalValue: number;
    oscillationsPerRow: number;
    retrigger: boolean;
    waveGenerator: WaveGenerator;
    getAmplitude(): number;
    getOffset(): number;
    getOriginalValue(): number;
    getOscillationsPerRow(): number;
    getRetrigger(): boolean;
    getValue(rowPosition: number): number;
    getWaveGenerator(): WaveGenerator;
    incrementOffset(): void;
    setAmplitude(amplitude: number): void;
    setOffset(offset: number): void;
    setOriginalValue(period: number): void;
    setOscillationsPerRow(oscillationsPerRow: number): void;
    setRetrigger(retrigger: boolean): void;
    setWaveGenerator(type: WaveType): void;
}
export declare const generateSawtoothWave: WaveGenerator;
export declare const generateSineWave: WaveGenerator;
export declare const generateSquareWave: WaveGenerator;

import { Sample } from "../models/Sample.interface";
/**
 * Applies the given volume to a sample
 * @param sample - Sample value to apply volume to
 * @param volume - The volume value to apply
 */
export declare const applyVolumeToSample: (sample: number, volume: number) => number;
/**
 * Returns a new fine-tuned period value, based upon given period and finetune parameters
 * @param period - the period value to tune
 * @param fineTune - the finetune value to tune the period by
 */
export declare const getFineTunedPeriod: (period: number, fineTune?: number) => number;
/**
 * Returns the sample frequency for the given amiga clock speed and period value
 * @param amigaClockSpeed - The clock speed the amiga machine is running at (differs slightly for PAL and NTSC)
 * @param period - The period value of the sample being played
 */
export declare const getFrequency: (amigaClockSpeed: number, period: number) => number;
/**
 * Returns the next position of the sample to be used. Handles sample looping / ending.
 * @param sample - Sample that is being used
 * @param position - The position to start from when incrementing
 * @param increment - The amount to incrememnt the sample position by
 */
export declare const getNextSampleIncrement: (sample: Sample, position: number, increment: number) => {
    nextPosition: number;
    sampleHasEnded: boolean;
};
/**
 * Returns the end value of the sample, taking into account looping.
 * @param sample - The sample to get the end position for
 */
export declare const getSampleEnd: (sample: Sample) => number;
/**
 * Returns the value we need to increment the sample position by for the given channel / buffer frequency
 * @param frequency - The frequency the channel is currently running at (see getFrequency)
 * @param bufferFrequency - The frequency for the output audio context buffer (could be 44010 or 48000 etc)
 */
export declare const getSampleIncrementValue: (frequency: number, bufferFrequency: number) => number;
/**
 * Returns the sample value for a given sample position (can be a fractional position)
 * @param sampleAudio - Array of sample data
 * @param samplePosition - The position in the sample to get a value for
 */
export declare const getSampleValue: (sampleAudio: Float32Array, samplePosition: number) => number;

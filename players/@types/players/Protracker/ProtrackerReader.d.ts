import { Instruction } from './models/Instruction.interface';
import { Sample } from './models/Sample.interface';
/****************************
 *     Public functions     *
 ****************************/
export declare function getChannelCount(fileData: ArrayBuffer): number;
export declare function getFormatDescription(fileData: ArrayBuffer): string;
export declare function getInitOptions(fileData: ArrayBuffer): AudioWorkletNodeOptions;
export declare function getPatternCount(fileData: ArrayBuffer): number;
export declare function getPatterns(fileData: ArrayBuffer): Instruction[][][];
export declare function getPatternSequence(fileData: ArrayBuffer): number[];
export declare function getRowsPerPattern(fileData: ArrayBuffer): number;
export declare function getSampleCount(): number;
export declare function getSamples(fileData: ArrayBuffer, addExtraEndSample?: boolean): Sample[];
export declare function getSignature(fileData: ArrayBuffer): string;
export declare function getSongLoopPatternSequenceIndex(fileData: ArrayBuffer): number | undefined;
export declare function getTitle(fileData: ArrayBuffer): string;
export declare function getUsedPatternSequenceLength(fileData: ArrayBuffer): number;
export declare function isFileSupported(fileData: ArrayBuffer): boolean;

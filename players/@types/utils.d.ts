export declare function createAudioContext(): AudioContext;
export declare function loadFile(source: string | File): Promise<ArrayBuffer>;
export declare function loadFileFromDisk(source: File): Promise<ArrayBuffer>;
export declare function loadFileFromUrl(source: string): Promise<ArrayBuffer>;
export declare function pickRandom(...params: any[]): any;
/**
 * Given a max of 3, it will return 0,1,2
 */
export declare function randomInt(max: number): number;
export declare function read8bitInt(arrayBuffer: ArrayBuffer, offset: number): number;
export declare function readBigEndian16bitInt(arrayBuffer: ArrayBuffer, offset: number): number;
export declare function readStringFromArrayBuffer(arrayBuffer: ArrayBuffer, start: number, end?: number): string;

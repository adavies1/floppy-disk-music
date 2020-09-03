export interface PlayerInitInfo {
    name: string;
    getInitOptions: (fileData: ArrayBuffer) => AudioWorkletNodeOptions;
    options: AudioWorkletNodeOptions;
    path: string;
}
declare const players: PlayerInitInfo[];
export default players;

export declare class Wurlitzer {
    audioContext: AudioContext;
    extraMessageHandler: (event: any) => void;
    fileData: ArrayBuffer | undefined;
    mixer: ChannelMergerNode | undefined;
    player: AudioWorkletNode | undefined;
    connected: boolean;
    status: 'not-ready' | 'loading' | 'stopped' | 'ready' | 'loading';
    constructor(audioContext?: AudioContext, messageHandler?: (event: any) => void);
    getInfo: () => void;
    load(source: string | File): Promise<void>;
    onMessage: (event: any) => void;
    pause(): void;
    play(): Promise<void>;
    previousSubtrack(): void;
    nextSubtrack(): void;
    reset(): void;
    setSubtrack(index: number): void;
    skipToPosition(newPosition: number): void;
    stop(): void;
    private _connect;
    private _disconnect;
}
export declare function addAmigaMixer(audioContext: AudioContext, player: AudioWorkletNode): ChannelMergerNode;
export declare function loadPlayer(fileData: ArrayBuffer, audioContext: AudioContext): Promise<AudioWorkletNode>;
export default Wurlitzer;

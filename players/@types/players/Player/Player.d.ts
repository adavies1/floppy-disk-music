import * as constants from '../../constants';
export default abstract class Player {
    audioContext: AudioContext;
    status: constants.PlayerStatus;
    constructor(audioContext: AudioContext);
    abstract getPlaybackStatus(): constants.PlayerStatus;
    abstract hasSubtracks(): boolean;
    abstract pause(): void;
    abstract play(): void;
    abstract previousSubtrack(): boolean;
    abstract nextSubtrack(): boolean;
    abstract reset(): void;
    abstract setSubtrack(index: number): boolean;
    abstract skipToPosition(newPosition: number): boolean;
    stop(): void;
}
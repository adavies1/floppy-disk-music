import React, { FunctionComponent } from 'react';
import css from './PlayerControls.module.scss';
import { SongListing } from '../../SongList/SongList';

type PlayerControlsProps = {
    play: () => any,
    pause: () => any,
    stop: () => any,
    ready: boolean,
    currentSong: SongListing
}

const PlayerControls:FunctionComponent<PlayerControlsProps> = props => (
    <>
        <div className={css.imageContainer}>
            {boxImage(props.currentSong)}
        </div>
        <p className={css.songName}>
            {props.currentSong.name}
        </p>
        <div className={css.buttons}>
            <button type="button" className={css.button} disabled={!props.ready} onClick={props.play}>Play</button>
            <button type="button" className={css.button} disabled={!props.ready} onClick={props.pause}>Pause</button>
            <button type="button" className={css.button} disabled={!props.ready} onClick={props.stop}>Stop</button>
        </div>
    </>
)

const boxImage = (song: SongListing):React.ReactElement => (
    <img className={css.boxImage} src={`${process.env.PUBLIC_URL}/img/boxes/${song.image || 'unknown.jpg'}`} alt={song.name}/>
)

export default PlayerControls;



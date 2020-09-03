import React, { FunctionComponent } from 'react';
import css from './PlayerControls.module.scss';
import { SongListing } from '../../SongList/SongList';
import IconButton from '../../UI/IconButton/IconButton';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';

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
        <p>
            <strong className={css.songName}>
                {props.currentSong.name}
            </strong>
            <br/>
            {`${props.currentSong.format}, ${props.currentSong.channels} channels, ${props.currentSong.size}`}
        </p>
        <div className={css.buttons}>
            <IconButton icon={faPlayCircle} onClick={props.play} title="Play"/>
            <IconButton icon={faPauseCircle} onClick={props.pause} title="Pause"/>
            <IconButton icon={faStopCircle} onClick={props.stop} title="Stop"/>
        </div>
    </>
)

const boxImage = (song: SongListing):React.ReactElement => (
    <img className={css.boxImage} src={`${process.env.PUBLIC_URL}/img/boxes/${song.image || 'unknown.jpg'}`} alt={song.name}/>
)

export default PlayerControls;



import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'
import { SongListing } from '../../components/SongList/SongList';
import { Wurlitzer } from 'wurlitzer';
import { Song } from 'wurlitzer/players/Protracker/Protracker';
import SongInfo from '../../components/SongInfo/SongInfo';
import SampleList from '../../components/SampleList/SampleList';

type CurrentSongRouteParams = {

}

interface CurrentSongProps extends RouteComponentProps<CurrentSongRouteParams> {
    currentSongListing: SongListing | undefined,
    currentSong: Song | undefined,
    player: Wurlitzer | undefined
}

const currentSong:FunctionComponent<CurrentSongProps> = props => (
    <>
        {props.currentSong && props.currentSongListing && props.player
            ? (
                <>
                    <h3>Song info</h3>
                    <SongInfo song={props.currentSong} songListing={props.currentSongListing}/>

                    <h3>Samples</h3>
                    <SampleList song={props.currentSong}/>
                </>
            )
            : (
                <p>There is no song loaded. Please load a song from the <Link to="/songs">songs list</Link> and then come back.</p>
            )
        }
    </>
);

export default currentSong;
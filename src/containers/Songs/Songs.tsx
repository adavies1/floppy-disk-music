import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { SongListing } from '../../components/SongList/SongList';
import SongList from '../../components/SongList/SongList';

type SongsRouteParams = {

}

interface SongsProps extends RouteComponentProps<SongsRouteParams> {
    songs: SongListing[],
    load: (song:SongListing) => void
}

const songs:FunctionComponent<SongsProps> = props => (
    <SongList list={props.songs} load={props.load}/>
);

export default songs;
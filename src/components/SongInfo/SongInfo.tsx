import React, { FunctionComponent } from 'react';
import { Song } from 'wurlitzer/players/Protracker/Protracker';
import { SongListing } from '../SongList/SongList';

export type SongInfoProps = {
    song: Song,
    songListing: SongListing
}

const songInfo:FunctionComponent<SongInfoProps> = props => (
    <ul>
        <li><strong>Title: </strong> {props.songListing.name}</li>
        <li><strong>Title (from file): </strong> {props.song.title}</li>
        <li><strong>Format: </strong> {props.songListing.format}</li>
        <li><strong>Channels: </strong> {props.song.channelCount}</li>
        <li><strong>Size: </strong> {props.songListing.size}</li>
        <li><strong>Signature: </strong> {props.song.signature}</li>
        <li><strong>Pattern count: </strong> {props.song.patternCount}</li>
        <li><strong>Pattern sequence length: </strong> {props.song.songLength}</li>
    </ul>
)

export default songInfo;
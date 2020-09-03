import React, { FunctionComponent } from 'react';
import css from './SongList.module.scss';

import IconButton from '../UI/IconButton/IconButton';
import IconLink from '../UI/IconLink/IconLink';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'



export type SongListProps = {
    list: SongListing[]
    load: (song:SongListing) => any
}

export type SongListing = {
    src: string,
    name: string,
    format: string,
    channels: number,
    image?: string,
    size: string
}

const songList:FunctionComponent<SongListProps> = props => (
    <>
        <table className={css.songTable}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Format</th>
                    <th>Channels</th>
                    <th>Size</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(song => (
                    <tr key={song.name}>
                        <td>{song.name}</td>
                        <td>{song.format}</td>
                        <td>{song.channels}</td>
                        <td>{song.size}</td>
                        <td>
                            <IconButton icon={faPlayCircle} onClick={() => props.load(song)} title="Play"/>
                            <IconLink icon={faFileDownload} href={song.src} title="Download"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
)

export default songList;
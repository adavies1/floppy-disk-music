import React, { FunctionComponent } from 'react';
import css from './SongList.module.scss';

export type SongListProps = {
    list: SongListing[]
    load: (song:SongListing) => any
}

export type SongListing = {
    src: string,
    name: string,
    format: string,
    channels: number,
    image?: string
}

const songList:FunctionComponent<SongListProps> = props => (
    <>
        <table className={css.songTable}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Format</th>
                    <th>Channels</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(song => (
                    <tr key={song.name}>
                        <td>{song.name}</td>
                        <td>{song.format}</td>
                        <td>{song.channels}</td>
                        <td>
                            <button type="button" onClick={() => props.load(song)}>load</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
)

export default songList;
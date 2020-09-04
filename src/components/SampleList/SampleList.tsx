import React, { FunctionComponent } from 'react';
import { Song } from 'wurlitzer/players/Protracker/Protracker';

import Table from '../UI/Table/Table';

export type SampleListProps = {
    song: Song
}

const sampleList:FunctionComponent<SampleListProps> = props => (
    <Table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Sample length (bytes)</th>
            </tr>
            {props.song.samples.map((sample, index) => (
                <tr key={index}>
                    <td>{sample.name}</td>
                    <td>{sample.length}</td>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default sampleList;
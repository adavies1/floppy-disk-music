import React, { useState } from 'react';
import './App.css';
import { Wurlitzer } from 'wurlitzer';

import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header'
import PlayerControls from './components/Player/PlayerControls/PlayerControls'
import SongList, { SongListing } from './components/SongList/SongList'

const songs:SongListing[] = [
    {src: `${process.env.PUBLIC_URL}/songs/dragonsfunk.mod`, name: "Dragons Funk", format: "Protracker", channels: 4, size: "193KB"},
    {src: `${process.env.PUBLIC_URL}/songs/Skid_Row2.mod`, name: "Skid Row 2", format: "Protracker", channels: 4, size: "47KB"},
    {src: `${process.env.PUBLIC_URL}/songs/SuperFrogTitle.mod`, name: "Super Frog", format: "Protracker", channels: 4, image: 'superfrog.jpg', size: "74KB"},
    {src: `${process.env.PUBLIC_URL}/songs/too-speedy.mod`, name: "Too Speedy", format: "Protracker", channels: 4, size: "37KB"},
    {src: `${process.env.PUBLIC_URL}/songs/wizkid_1.mod`, name: "Wizkid round 1/8", format: "Protracker", channels: 4, image: 'wizkid.jpg', size: "38KB"},
    {src: `${process.env.PUBLIC_URL}/songs/bedroomd.mod`, name: "Bedroom Door", format: "Protracker", channels: 4, size: "85KB"},
    {src: `${process.env.PUBLIC_URL}/songs/dsots-intro.mod`, name: "The Dark Side of the Spoon Intro", format: "Protracker", channels: 4, size: "179KB"},
    {src: `${process.env.PUBLIC_URL}/songs/moonclow.mod`, name: "A Clown in the Moon", format: "Protracker", channels: 8, size: "211KB"},
];

function App() {
    const [currentSong, setCurrentSong] = useState(undefined as SongListing | undefined);
    const [ready, setReady] = useState(false);
    const [player, setPlayer] = useState(undefined as Wurlitzer | undefined);

    const play = () => {player && player.play()}
    const pause = () => {player && player.pause()}
    const stop = () => {player && player.stop()}

    const load = (song: SongListing):void => {
        let p = player || new Wurlitzer();
        if(!player) setPlayer(p);

        p.load(song.src).then(() => {
            setCurrentSong(song);
            setReady(true);
            p.play();
        });
    }

    return (
        <div className="App">
            <Header/>
            <Grid>
                <Box>
                    <SongList list={songs} load={load}/>
                </Box>
                <Box>
                    {currentSong
                        ? <PlayerControls {...{ready, play, pause, stop, currentSong}}/>
                        : <p>No song loaded</p>
                    }
                </Box>
            </Grid>
        </div>
    );
}

export default App;

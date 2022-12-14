import React, { useState } from 'react';
import './App.css';
import { Wurlitzer } from 'wurlitzer';
import { Song } from 'wurlitzer/players/Protracker/Protracker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppInfo from './containers/AppInfo/AppInfo';
import CurrentSong from './containers/CurrentSong/CurrentSong';
import Songs from './containers/Songs/Songs';

import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header'
import PlayerControls from './components/Player/PlayerControls/PlayerControls'
import { SongListing } from './components/SongList/SongList'

const songs:SongListing[] = [
    {src: `${process.env.PUBLIC_URL}/songs/dragonsfunk.mod`, name: "Dragons Funk", format: "Protracker", channels: 4, size: "193KB"},
    {src: `${process.env.PUBLIC_URL}/songs/Skid_Row2.mod`, name: "Skid Row 2", format: "Protracker", channels: 4, size: "47KB"},
    {src: `${process.env.PUBLIC_URL}/songs/SuperFrogTitle.mod`, name: "Super Frog", format: "Protracker", channels: 4, image: 'superfrog.jpg', size: "74KB"},
    {src: `${process.env.PUBLIC_URL}/songs/too-speedy.mod`, name: "Too Speedy", format: "Protracker", channels: 4, size: "37KB"},
    {src: `${process.env.PUBLIC_URL}/songs/wizkid_1.mod`, name: "Wizkid round 1/8", format: "Protracker", channels: 4, image: 'wizkid.jpg', size: "38KB"},
    {src: `${process.env.PUBLIC_URL}/songs/bedroomd.mod`, name: "Bedroom Door", format: "Protracker", channels: 4, size: "85KB"},
    {src: `${process.env.PUBLIC_URL}/songs/dsots-intro.mod`, name: "The Dark Side of the Spoon Intro", format: "Protracker", channels: 4, size: "179KB"},
    {src: `${process.env.PUBLIC_URL}/songs/moonclow.mod`, name: "A Clown in the Moon", format: "Protracker", channels: 8, size: "211KB"},
    {src: `${process.env.PUBLIC_URL}/songs/ecodreams.mod`, name: "Ecodreams", format: "Protracker", channels: 4, size: "29KB"},
    {src: `${process.env.PUBLIC_URL}/songs/wizard-2.mod`, name: "Wizard2", format: "Protracker", channels: 4, size: "22KB"},
    {src: `${process.env.PUBLIC_URL}/songs/bitner.mod`, name: "Bitner", format: "Protracker", channels: 4, size: "130KB"},
    {src: `${process.env.PUBLIC_URL}/songs/jackson.mod`, name: "Smooth Criminal remix", format: "Protracker", channels: 4, size: "131KB"},
    {src: `${process.env.PUBLIC_URL}/songs/2_cute_4_u.mod`, name: "Too cute 4 u", format: "Protracker", channels: 4, size: "11KB"},
    {src: `${process.env.PUBLIC_URL}/songs/sota.mod`, name: "Spaceballs State of the art", format: "Protracker", channels: 4, size: "231KB"},
];

function App() {
    const [currentSongListing, setCurrentSongListing] = useState(undefined as SongListing | undefined);
    const [currentSong, setCurrentSong] = useState(undefined as Song | undefined);
    const [ready, setReady] = useState(false);
    const [player, setPlayer] = useState(undefined as Wurlitzer | undefined);

    const play = () => {player && player.play()}
    const pause = () => {player && player.pause()}
    const stop = () => {player && player.stop()}

    const load = (songListing: SongListing):void => {
        let p = player || new Wurlitzer(undefined, messageHandler);
        if(!player) setPlayer(p);

        p.load(songListing.src).then(() => {
            setCurrentSongListing(songListing);
            setReady(true);
            p.play();
            p.getInfo();
        });
    }

    const messageHandler = (event: any) => {
        if(event.data.message) {
            switch(event.data.message) {
                case 'songInfo':
                    setCurrentSong(event.data.value as Song);
                    console.log(event.data.value);
                    break;
            }
        }
    }

    return (
        <BrowserRouter basename="floppy-disk-music">
            <div className="App">
                <Header/>
                <Grid>
                    <Box>
                        <Switch>
                            <Route path="/songs" render={routerProps => <Songs {...routerProps} songs={songs} load={load}/>} />
                            <Route path="/current-song" render={routerProps => <CurrentSong {...routerProps} currentSong={currentSong} currentSongListing={currentSongListing} player={player}/>} />
                            <Route component={AppInfo}></Route>
                        </Switch>
                    </Box>
                    <div>
                        <Box stickToTop>
                            {currentSongListing
                                ? <PlayerControls {...{ready, play, pause, stop, currentSong: currentSongListing}}/>
                                : <p style={{textAlign: 'center'}}>No song loaded</p>
                            }
                        </Box>
                    </div>
                </Grid>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'

type AppInfoRouteParams = {

}

interface AppInfoProps extends RouteComponentProps<AppInfoRouteParams> {

}

const appInfo:FunctionComponent<AppInfoProps> = props => (
    <>
        <p>
            Welcome! To begin, please go to the <Link to='/songs'>song list</Link>, and then press the play button next to a track.
            Currently, only Chrome and Firefox are supported.
        </p>
        <h3>What is this website?</h3>
        <p>
            This is a live demo of 'Floppy Disk Music', a website that aims to provide playback support for
            many older music formats found on computers from the 80s/90s, which tended to use floppy disks.
            It only currently supports 1 format, but the software has a modular design, ready for more players
            to be added in the future.
        </p>
        <h3>What's special about this website / project?</h3>
        <p>
            All processing is done in the browser. That means the original file (the same file found on the floppy disk)
            is decoded, checked for compatibility, and then played back, all using javascript. There is no backend processing
            of any kind, only the serving of files.
        </p>
        <p>
            The frontend is using both React and the <a href="https://github.com/adavies1/wurlitzer">Wurlizter</a> audio
            playback engine (also written by me).
        </p>
    </>
);

export default appInfo;
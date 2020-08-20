import React, { FunctionComponent } from 'react';
import css from './Header.module.scss';

type HeaderProps = {

}

const header:FunctionComponent<HeaderProps> = props => (
    <header className={css.header}>
        <h1>Floppy Disk Music</h1>
        <h2>Javascript retro music player</h2>
    </header>
)

export default header;
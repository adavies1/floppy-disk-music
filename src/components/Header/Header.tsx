import React, { FunctionComponent } from 'react';
import css from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Box from '../Box/Box';
import styles from './Header.module.scss';

type HeaderProps = {

}

const header:FunctionComponent<HeaderProps> = props => (
    <header className={css.header}>
        <h1>Floppy Disk Music</h1>
        <h2>Javascript retro music player</h2>

        <Box>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink className={styles.navLink} activeClassName={styles.active} to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} activeClassName={styles.active} to="/songs" exact>Songs</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} activeClassName={styles.active} to="/current-song" exact>Current Song</NavLink>
                    </li>
                </ul>
            </nav>
        </Box>

    </header>
)

export default header;
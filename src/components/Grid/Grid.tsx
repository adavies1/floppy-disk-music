import React, { FunctionComponent } from 'react';
import css from './Grid.module.scss';

type GridProps = {

}

const grid:FunctionComponent<GridProps> = props => (
    <div className={css.Grid}>{props.children}</div>
);

export default grid;
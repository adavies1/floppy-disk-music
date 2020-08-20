import React, { FunctionComponent } from 'react';
import css from './Box.module.scss';

type BoxProps = {
    orange?: boolean
}

const box:FunctionComponent<BoxProps> = props => (
    <div className={`${css.Box} ${props.orange ? css.orange : ''}`} {...props}>
        {props.children}
    </div>
);

export default box;
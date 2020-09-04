import React, { FunctionComponent } from 'react';
import css from './Box.module.scss';

type BoxProps = {
    orange?: boolean,
    stickToTop?: boolean
}

const box:FunctionComponent<BoxProps> = props => (
    <div className={`${css.Box} ${props.orange ? css.orange : ''} ${props.stickToTop ? css.stickToTop : ''} `} {...props}>
        {props.children}
    </div>
);

export default box;
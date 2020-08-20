import React, { FunctionComponent } from 'react';
import css from './Flexbox.module.scss';

type FlexboxProps = {

}

const flexbox:FunctionComponent<FlexboxProps> = props => (
    <div className={css.Flexbox}>{props.children}</div>
);

export default flexbox;
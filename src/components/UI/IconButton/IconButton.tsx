import React, { FunctionComponent } from 'react';
import css from './IconButton.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconButtonProps = {
    onClick: () => void,
    icon: IconDefinition,
    title?: string,
}

const iconButton:FunctionComponent<IconButtonProps> = props => (
    <button type="button" className={css.IconButton} onClick={props.onClick} title={props.title}>
        <FontAwesomeIcon icon={props.icon} className={css.icon}/>
    </button>
);

export default iconButton;
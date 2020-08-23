import React, { FunctionComponent } from 'react';
import css from './IconLink.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconLinkProps = {
    href: string,
    icon: IconDefinition,
    title?: string,
}

const iconLink:FunctionComponent<IconLinkProps> = props => (
    <a href={props.href} className={css.IconLink} title={props.title}>
        <FontAwesomeIcon icon={props.icon} className={css.icon}/>
    </a>
);

export default iconLink;
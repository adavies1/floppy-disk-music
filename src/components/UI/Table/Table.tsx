import React, { FunctionComponent } from 'react';
import css from './Table.module.scss';

type TableProps = {
    className?: string
}

const table:FunctionComponent<TableProps> = props => (
    <table className={`${css.table} ${props.className || ''}`}>
        {props.children}
    </table>
)

export default table;
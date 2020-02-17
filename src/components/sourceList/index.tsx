import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport'
import { Link } from 'react-router-dom';

export default function SourceList(props: JSX.IntrinsicAttributes) {
    const sources = [
        { name: 'Freebail Wedding API', id: 'freebail-wedding-api', icon: ImportExportIcon }
    ]

    return(
        <List>
        {sources.map((source) => (
            <Link to={'/sources/' + source.id} key={source.id}>
                <ListItem button key={source.id}>
                    <ListItemIcon>{React.createElement(source.icon)}</ListItemIcon>
                    <ListItemText primary={source.name} />
                </ListItem>
            </Link>
        ))}
        </List>
    )
}
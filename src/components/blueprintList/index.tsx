import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { Link } from 'react-router-dom';

export default function BlueprintList(props: JSX.IntrinsicAttributes) {
    const blueprints = [
        { name: 'Page', id: 'page', icon: PostAddIcon },
        { name: 'Nav', id: 'nav', icon: MenuOpenIcon }
    ]

    return(
        <List>
        {blueprints.map((blueprint) => (
            <Link to={'/blueprints/' + blueprint.id} key={blueprint.id}>
                <ListItem button key={blueprint.id}>
                    <ListItemIcon>{React.createElement(blueprint.icon)}</ListItemIcon>
                    <ListItemText primary={blueprint.name} />
                </ListItem>
            </Link>
        ))}
        </List>
    )
}
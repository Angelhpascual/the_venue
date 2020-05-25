import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ( props ) => {
    return (
       <Drawer
        anchor= "right"
        open = {props.open}
        onClose = {() => props.onClose(false) }
       >
        <List component="nav">
            <ListItem button onClick = {() => console.log('Hecho')}> Event List
            </ListItem>
            <ListItem button onClick = {() => console.log('Hecho')}> Venue NFO
            </ListItem>
            <ListItem button onClick = {() => console.log('Hecho')}> Hightlight
            </ListItem>
            <ListItem button onClick = {() => console.log('Hecho')}> Pricing
            </ListItem>
            <ListItem button onClick = {() => console.log('Hecho')}> Location
            </ListItem>
        </List>
            
       </Drawer>
    );
};

export default SideDrawer;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
		width: 'auto',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar
}));

export default function ClippedDrawer(props: JSX.IntrinsicAttributes) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
            <List>
              {['Inbox', 'Starred', 'Sent', 'Drafts'].map((text, index) => (
                <Link to={ text.toLowerCase() }>
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Redirect from="/" to="/inbox"/>
          <Switch>
            <Route path="/inbox">
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
                scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
                lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
                dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus
                sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod
                lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
                elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere
                sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </Route>
            <Route path="/starred">
              <Typography paragraph>
                Bacon ipsum dolor amet pork bacon boudin, picanha corned beef cow tri-tip pork chop venison pork loin shank pig.
                Landjaeger sirloin chicken boudin. Tongue ground round sausage andouille hamburger. Shank turducken spare ribs
                flank chuck. Boudin ham hock bresaola turducken picanha chuck capicola rump ham pork chop short loin sausage
                ribeye porchetta pastrami. Jowl pork loin venison rump. Rump boudin jerky hamburger pastrami pork loin tri-tip
                leberkas meatball filet mignon sirloin turkey salami corned beef.
              </Typography>
              <Typography paragraph>
                Bacon porchetta t-bone pig filet mignon venison capicola sirloin fatback. Ground round salami pork biltong pork
                loin swine doner turkey chuck spare ribs. Tongue doner bresaola porchetta, chuck kevin alcatra beef ribs.
                Meatloaf venison cow jowl, turkey alcatra ham hock chuck salami shank capicola chicken pork chop.
              </Typography>
            </Route>
            <Route path="/sent">
              <Typography paragraph>
                I love cheese, especially melted cheese cottage cheese. Manchego bavarian bergkase paneer gouda caerphilly stinking
                bishop squirty cheese boursin. Who moved my cheese manchego rubber cheese cream cheese cheese strings mascarpone
                cheese triangles cheese slices. Cow lancashire macaroni cheese feta squirty cheese edam cream cheese fondue. Pepper
                jack when the cheese comes out everybody's happy ricotta roquefort boursin who moved my cheese cheesy grin mascarpone.
                Caerphilly fromage boursin cow port-salut when the cheese comes out everybody's happy fondue pepper jack. Cheesy grin.
              </Typography>
              <Typography paragraph>
                Red leicester cow pecorino. Cheesecake emmental cheesy grin chalk and cheese melted cheese melted cheese airedale
                stilton. Airedale danish fontina roquefort stinking bishop mascarpone cheese and biscuits blue castello melted cheese.
                Jarlsberg st. agur blue cheese squirty cheese cheese triangles airedale stilton cauliflower cheese fromage. Fromage
                cheese and biscuits gouda dolcelatte croque monsieur cheese strings hard cheese stinking bishop. Emmental fromage
                frais cauliflower cheese cheese strings babybel fromage frais cheesy feet cream cheese. Boursin feta cheeseburger
                jarlsberg st. agur blue cheese goat danish fontina brie. Boursin mascarpone cheese triangles cauliflower cheese
                stilton babybel dolcelatte cauliflower cheese. Gouda.
              </Typography>
            </Route>
            <Route path="/drafts">
              <Typography paragraph>
                Marooned fire in the hole chantey black jack splice the main brace sheet careen brigantine jolly boat bowsprit. Coffer
                parrel fluke keelhaul haul wind fire ship scurvy Letter of Marque loot Corsair. Lass Buccaneer piracy hearties coxswain
                case shot grapple tackle cog mizzen.
              </Typography>
              <Typography paragraph>
                Sutler shrouds jib brig bring a spring upon her cable Pieces of Eight squiffy quarterdeck coxswain Jolly Roger. Pirate
                Round topmast ye carouser coffer spyglass bilge water yardarm Admiral of the Black grog. Jolly Roger cog haul wind dead
                men tell no tales port capstan overhaul code of conduct shrouds sheet.
              </Typography>

            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

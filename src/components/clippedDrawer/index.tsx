import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SettingsIcon from '@material-ui/icons/Settings'
import CategoryIcon from '@material-ui/icons/Category'
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent'
import SubjectIcon from '@material-ui/icons/Subject'
import InputIcon from '@material-ui/icons/Input'
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import BlueprintList from '../blueprintList'
import EditBlueprint from '../editBlueprint'
import SourceList from '../sourceList'
import EditSource from '../editSource'

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
  const sections = [
    { name: 'Blueprints', id: 'blueprints', icon: CategoryIcon },
    { name: 'Content', id: 'content', icon: SubjectIcon },
    { name: 'Sources', id: 'sources', icon: InputIcon },
    { name: 'Connectors', id: 'connectors', icon: SettingsInputComponentIcon }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Kudasai Admin Panel
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
              {sections.map((section, _index) => (
                <Link to={ '/' + section.id } key={section.id}>
                  <ListItem button>
                    <ListItemIcon>{React.createElement(section.icon)}</ListItemIcon>
                    <ListItemText primary={section.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          <Divider />
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Redirect from="/" to="/blueprints"/>
          <Switch>
            <Route path="/blueprints">
              <Switch>
                <Route path={'/blueprints/:blueprintId'}>
                  <EditBlueprint />
                </Route>
                <Route path={'/blueprints'}>
                  <BlueprintList />
                </Route>
              </Switch>
            </Route>
            <Route path="/content">
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
            <Route path="/sources">
              <Switch>
                <Route path={'/sources/:sourceId'}>
                  <EditSource />
                </Route>
                <Route path={'/sources'}>
                  <SourceList />
                </Route>
              </Switch>
            </Route>
            <Route path="/connectors">
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

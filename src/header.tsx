import React from 'react';
import {AppBar,Avatar, makeStyles,BottomNavigation,BottomNavigationAction,Typography,Grid} from '@material-ui/core';
import theme from './theme'
import MessageIcon from '@material-ui/icons/Message';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import MoodIcon from '@material-ui/icons/Mood';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


// Component Classes
export function Logo(){
  const styles = useStyles();
  return(
      <Avatar className={styles.avatar} variant="square" src={logo}/>
  )
}

export class AppHeader extends React.Component<headerProps_,appState_>{

  render(){
    return(
      <AppBar position="fixed">
        <Grid container  spacing={0} alignItems="center" justify="center">
          <Grid item>
            <Logo/>
          </Grid>
          <Grid item>
            <Typography color="secondary" variant="h2">Pokemania</Typography>
          </Grid>
          <Grid item xs={12}>
            <NavigationBar handler={this.props.handler}/>
          </Grid>
        </Grid>
        </AppBar>
    )
  }
}

export class NavigationBar extends AppHeader{
  
  constructor(props:any){
    super(props);
    this.state = {selected:"commands"};
    this.changeTab = this.changeTab.bind(this);
}
private changeTab(event: React.ChangeEvent<{}>,newValue:string){
    this.setState({selected:newValue});
    this.props.handler(newValue);
}

render(){
    return(
        <React.Fragment>
          <BottomNavigation value={this.state.selected} showLabels onChange={this.changeTab}>
              <BottomNavigationAction label="Commands" value ="commands" icon={<MessageIcon/>}/>
              <BottomNavigationAction label="About" value="about" icon={<InfoIcon/>}/>
              <BottomNavigationAction label="Staff" value="staff" icon={<PeopleIcon/>}/>
              <BottomNavigationAction label="Partners " value="partners" icon={<MoodIcon/>}/>
              <BottomNavigationAction label="Patreon" value="patreon" icon={<MonetizationOnIcon/>}/>
          </BottomNavigation>
        </React.Fragment>
        
    )
}
}


// interfaces for states and props
export interface appState_{
  selected: string;
}

interface headerProps_{
  handler:any
}

// Loading Styles and images
const useStyles = makeStyles({
    avatar:{
      width:theme.spacing(7),
      height:theme.spacing(7)
    },
  });

const logo = require('./logo.png');

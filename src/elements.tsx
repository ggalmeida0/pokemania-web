import React from 'react';
import {AppBar,Avatar, makeStyles,BottomNavigation,BottomNavigationAction,Typography,Paper,styled, Grid, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import theme from './theme'
import MessageIcon from '@material-ui/icons/Message';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import MoodIcon from '@material-ui/icons/Mood';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// Component Classes
export function Logo(){
    const styles = useStyles();
    return(
        <Avatar className={styles.avatar} variant="square" src={logo}/>
    )
}

export class PageContent extends React.Component<appState_,{}>{

  render(){
    if(this.props.selected === "commands")
      return(
        <StyledPaper elevation={6}>
          <Grid container>
            <Grid item xs={12}>
              <StyledTitle color="primary" variant="h4">List of Commands</StyledTitle>
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography variant="h6">Getting Started</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ol>
                      <li><Typography align="left" variant="body1">Use the command <b>-start</b></Typography></li>
                      <li><Typography align="left" variant="body1">You will be asked to select the gender of your character. Type male (m) or female (f) before continuing.</Typography></li>
                      <li><Typography align="left" variant="body1">Follow the avatar creation to the end, or else you will be locked from using other commands.</Typography></li>
                      <li><Typography align="left" variant="body1">Do <b>-choose</b> followed by the name of the starter of your choice to get your first pokemon. Ex. -choose Charmander </Typography></li>
                      <li><Typography align="left" variant="body1">You will start with 500 pokeballs and can purchase more by typing -shop to view the options currently available.</Typography></li>
                  </ol>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography variant="h6" align="left">Catch Commands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li><Typography align="left" variant="body1"><b>-catch</b></Typography></li>
                    <Typography align="left" variant="body1">This will use pokeballs to catch; Pokémon have a high chance of escaping. Be cautious, these pokéballs are expendable if the catch is successful or not.</Typography>
                    <li><Typography align="left" variant="body1"><b>-gcatch</b></Typography></li>
                    <Typography align="left" variant="body1">This will use greatballs, which have a medium chance of escaping. </Typography>
                    <li><Typography align="left" variant="body1"><b>-ucatch</b></Typography></li>
                    <Typography align="left" variant="body1">Using ultraballs have a higher chance to catch the Pokémon compared to the rest of the type of balls currently available. </Typography>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography align="left" variant="h6">Useful Commands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li><Typography align="left" variant="body1"><b>-help</b></Typography></li>
                    <Typography align="left" variant="body1">Shows a list of commands that the bot currently respond to, with a description for each command. </Typography>
                    <li><Typography align="left" variant="body1"><b>-profile</b></Typography></li>
                    <Typography align="left" variant="body1">This will show you all the basic information about your character. Additional features will be added eventually. </Typography>
                    <li><Typography align="left" variant="body1"><b>-inventory</b></Typography></li>
                    <Typography align="left" variant="body1">This will show you all the items you have obtained so far. </Typography>
                    <li><Typography align="left" variant="body1"><b>-pokemon</b></Typography></li>
                    <Typography align="left" variant="body1">This will open the list of Pokémon you have caught. </Typography>
                    <li><Typography align="left" variant="body1"><b>-info #</b></Typography></li>
                    <Typography align="left" variant="body1">This will show the information of the Pokémon you have in your inventory that correlates with the number. </Typography>
                    <li><Typography align="left" variant="body1"><b>-info</b></Typography></li>
                    <Typography align="left" variant="body1">This will show the information of your currently selected Pokémon. </Typography>
                    <li><Typography align="left" variant="body1"><b>-invite</b></Typography></li>
                    <Typography align="left" variant="body1">Will give you the link to invite the bot to your server </Typography>
                    <li><Typography align="left" variant="body1"><b>-server</b></Typography></li>
                    <Typography align="left" variant="body1">Will give you the link to join the Official Support Server. </Typography>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </StyledPaper>
      )
      else return <div></div>
  }
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
              <BottomNavigationAction label="Staff" value="favorites" icon={<PeopleIcon/>}/>
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
const StyledPaper = styled(Paper)({
  marginTop:theme.spacing(10),
  maxWidth: theme.spacing(150),
});
const StyledTitle = styled(Typography)({
  marginTop:theme.spacing(8),
  marginLeft:theme.spacing(10),
  marginRight:theme.spacing(10),
  marginBottom:theme.spacing(3)
});
const logo = require('./logo.png');

import React from 'react';
import {appState_} from './header';
import {Grid, Button, Accordion, Typography, Paper, AccordionDetails, AccordionSummary, styled, Card, Avatar, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import theme from './theme'

class PageContent extends React.Component<appState_,{}>{

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
                        <li><Typography align="left" variant="body1">You will start with 500 pokeballs and can purchase more by typing <b>-shop</b> to view the options currently available.</Typography></li>
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
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography align="left" variant="h6">Money Making commands</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li><Typography align="left" variant="body1"><b>-fish</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-explore</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-mine</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-bonus</b></Typography></li>
                      <Typography align="left" variant="body1">These commands have cooldowns and chances of getting other rewards other than money. </Typography>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography align="left" variant="h6">Trading commands</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li><Typography align="left" variant="body1"><b>-trade @user</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-accept</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-deny</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-confirm</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-cancel</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-t</b></Typography></li>
                      <Typography align="left" variant="body1">Examples:  Pokemon: <b>-t</b> p 9 Items: <b>-t</b> i roto bargain 1  Pokeballs <b>-t</b> i pokeball 86 Pokedollars: <b>-t</b> pd 21009</Typography>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography align="left" variant="h6">Server Config commands</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li><Typography align="left" variant="body1"><b>-disablechannel</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-redirectspawns</b></Typography></li>
                      <li><Typography align="left" variant="body1"><b>-prefix</b></Typography></li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </StyledPaper>
        )
        else if(this.props.selected === "about"){
          return (
            <StyledPaper elevation={6}>
              <Grid container>
                <Grid item>
                  <StyledTitle color="primary" variant="h4">PokéMania is a bot for Discord that brings a fun Pokémon MMO to discord. Players can catch, trade, and compete with friends all in their favorite messaging app Discord.</StyledTitle>
                </Grid>
              </Grid>
            </StyledPaper>
          );
        }
        else if(this.props.selected === "staff"){
          return(
            <StyledPaper elevation={6}>
              <Grid container>
                <Grid item xs={12}>
                  <StyledTitle color="primary" variant="h4">Staff:</StyledTitle>
                </Grid>
                <Grid item xs={6}>
                  <TriickstrCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={triickstr}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>Triickstr #0420</b></Typography>
                          <Typography variant="h5" align="left">Founder/Dev</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </TriickstrCard>
                </Grid>
                <Grid item xs={6}>
                  <GabeCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={gabe}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>Gabe #7287</b></Typography>
                          <Typography variant="h5" align="left">Dev</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </GabeCard>
                </Grid>
                <Grid item xs={6}>
                  <QuantCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={quant}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>Quant #0001</b></Typography>
                          <Typography variant="h5" align="left">Server Manager - Head of Staff</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </QuantCard>
                </Grid>
                <Grid item xs={6}>
                  <TKCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={tk}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>TK #7777</b></Typography>
                          <Typography variant="h5" align="left">Server Manager - Head of Partnerships</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </TKCard>
                </Grid>
                <Grid item xs={6}>
                  <SodaCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={soda}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>Soda #0101</b></Typography>
                          <Typography variant="h5" align="left">Server Manager</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </SodaCard>
                </Grid>
                <Grid item xs={6}>
                  <DagdaCard>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6}>
                          <StyledAvatar src={dagda}></StyledAvatar>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5" align="left"><b>Dagda #7317</b></Typography>
                          <Typography variant="h5" align="left">Server Admin</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </DagdaCard>
                </Grid>
              </Grid>
            </StyledPaper>
          )
        }
        else if(this.props.selected === "partners"){
          return(
            <StyledPaper>
              <Grid container alignItems="center"justify="center">
                <Grid item xs={12}>
                  <StyledTitle variant="h4" color="primary">Partners:</StyledTitle>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/T6Rmk7C" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h5">WLR</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={wlr}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/44kDwJt" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h6">The Predecessors</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={predecessors}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/eEu3CDg" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h5">Insomnia</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={insomnia}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/Sm4hpxD" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h5">Pokéland</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={pokeland}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/d2UFsFz" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h5">Team Infinity</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={infinity}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
                <Grid item xs={4}>
                  <GeneralCard>
                    <Button href="https://discord.gg/Hp3rvcJ" target="_blank">
                      <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                          <Typography color="primary" variant="h6">Team Free Radicals</Typography> 
                        </Grid>
                        <Grid item xs={12}>
                          <WlrAvatar variant="square" src={freeRadicals}/>
                        </Grid>
                      </Grid>
                    </Button>
                  </GeneralCard>
                </Grid>
              </Grid>
            </StyledPaper>
          )
        }
        else if(this.props.selected === "patreon"){
          return(
            <StyledPaper>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12}>
                  <StyledTitle color="primary" variant="h4">You can help us grow by pledging today to our patreon!</StyledTitle>
                </Grid>
                <Grid item xs={12}>
                  <Button size="large" color="secondary" variant="contained" href="https://www.patreon.com/pokemania" target="_blank">Click Here!</Button>
                </Grid>
                <Grid item xs={6}>
                  <FanCard>
                    <CardActionArea href="https://www.patreon.com/join/pokemania/checkout?rid=5449038" target="_blank">
                      <CardImage image={fan}/>
                      <CardContent>
                        <PatreonCardText variant="h6" align="left"><b>Pokemon Fan (Tier 1):</b> $3 - 45 Stardust</PatreonCardText>
                      </CardContent>
                    </CardActionArea>  
                  </FanCard>
                </Grid>
                <Grid item xs={6}>
                  <CatcherCard>
                    <CardActionArea href="https://www.patreon.com/join/pokemania/checkout?rid=1591213" target="_blank">
                      <CardImage image={catcher}/>
                      <CardContent>
                        <PatreonCardText variant="h6" align="left"><b>Pokemon Catcher (Tier 2):</b> $5 - 75 Stardust + 3 Pokeboxes + 5 Masterballs + Monthly Membership</PatreonCardText>
                      </CardContent>
                    </CardActionArea>
                  </CatcherCard>
                </Grid>
                <Grid item xs={6}>
                  <TrainerCard>
                    <CardActionArea href="https://www.patreon.com/join/pokemania/checkout?rid=48294653" target="_blank">
                      <CardImage image={trainer}/>
                      <CardContent>
                        <PatreonCardText variant="h6" align="left"><b>Pokemon Trainer (Tier 3):</b> $10 - 150 Stardust + 5 Pokeboxes + 10 Masterballs + Monthly Silver Membership</PatreonCardText>
                      </CardContent>
                    </CardActionArea>
                  </TrainerCard>
                </Grid>
                <Grid item xs={6}>
                  <ChampionCard>
                    <CardActionArea href="https://www.patreon.com/join/pokemania/checkout?rid=4829473" target="_blank">
                      <CardImage image={champion}/>
                      <CardContent>
                        <PatreonCardText variant="h6" align="left"><b>Pokemon Champion (Tier 4):</b> $15 - 225 Stardust + 7 Pokeboxes + 15 Masterballs + Monthly Gold Membership</PatreonCardText>
                      </CardContent>
                    </CardActionArea>
                  </ChampionCard>
                </Grid>
                <Grid item xs={12}>
                  <MasterCard>
                    <CardActionArea href="https://www.patreon.com/join/pokemania/checkout?rid=4829478" target="_blank">
                      <CardImage image={master}/>
                      <CardContent>
                        <PatreonCardText variant="h6" align="left"><b>Pokemon Master (Tier 5):</b> $20 - 300 Stardust + 9 Pokeboxes + 20 Masterballs + Monthly Diamond Membership</PatreonCardText>
                      </CardContent>
                    </CardActionArea>
                  </MasterCard>
                </Grid>
              </Grid>
            </StyledPaper>
          )
        }
    }
  }



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
const triickstr = require("./triickstr.png");
const gabe = require("./gabe.png");
const dagda = require("./dagda.png");
const quant = require("./quant.gif");
const tk = require("./tk.jpg");
const soda = require("./soda.png");
const wlr = require("./wlr.png");
const predecessors = require("./predecessors.png");
const insomnia = require("./insomnia.png");
const pokeland = require("./pokeland.png");
const infinity = require("./infinity.png");
const freeRadicals = require("./freeRadicals.png");
const fan = require("./pokemonfan.png");
const catcher = require("./pokemoncatcher.png");
const trainer = require("./pokemontrainer.png");
const champion = require("./pokemonchampion.png");
const master = require("./pokemonmaster.jpg");

const StyledAvatar = styled(Avatar)({
  width: theme.spacing(12),
  height:theme.spacing(12),
})
const DagdaCard = styled(Card)({
  backgroundColor:"#e5d66f",
  margin:theme.spacing(3),
})
const TriickstrCard = styled(Card)({
  backgroundColor:"#224a63",
  margin:theme.spacing(3),
})
const GabeCard = styled(Card)({
  backgroundColor:"#a159ac",
  margin:theme.spacing(3),
})
const QuantCard = styled(Card)({
  backgroundColor:"#76b4ab",
  margin:theme.spacing(3),
})
const TKCard = styled(Card)({
  backgroundColor:"#5e596a",
  margin:theme.spacing(3),
})
const SodaCard = styled(Card)({
  backgroundColor:"#4a6696",
  margin:theme.spacing(3),
})
const GeneralCard = styled(Card)({
  marginLeft:theme.spacing(15),
  marginBottom:theme.spacing(2),
  maxWidth:theme.spacing(20),
})
const WlrAvatar = styled(StyledAvatar)({
  marginLeft:theme.spacing(3),

})

const FanCard = styled(Card)({
  margin:theme.spacing(5),
  marginLeft:theme.spacing(30),
  maxWidth:theme.spacing(40),
  backgroundColor: "#ac8153"
})
const CatcherCard = styled(Card)({
  maxWidth:theme.spacing(40),
  margin:theme.spacing(5),
  backgroundColor: "#db6424"
})
const TrainerCard = styled(Card)({
  maxWidth:theme.spacing(40),
  margin:theme.spacing(5),
  marginLeft:theme.spacing(30),
  backgroundColor: "#7f8080"
})
const ChampionCard = styled(Card)({
  maxWidth:theme.spacing(40),
  margin:theme.spacing(5),
  backgroundColor: "#bf9f40"
})
const MasterCard = styled(Card)({
  maxWidth:theme.spacing(40),
  margin:theme.spacing(5),
  backgroundColor: "#00daff",
  marginLeft:theme.spacing(55),
})
const PatreonCardText = styled(Typography)({
  marginTop:theme.spacing(3),
  // marginRight:theme.spacing(20),
})

const CardImage  = styled(CardMedia)({
  height:theme.spacing(30)
})
  export default PageContent;
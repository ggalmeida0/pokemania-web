import React from 'react';
import './App.css';
import {ThemeProvider,Grid} from '@material-ui/core';
import theme from './theme';
import {Logo,NavigationBar,AppHeader,PageContent,appState_} from './elements';



class  App extends React.Component<{},appState_>{
  constructor(props:object){
    super(props);
    this.state ={selected:"commands"};
  }

  private changeContent(newValue:string){
    this.setState({selected:newValue})
  }
  
  render (){
    return(
      <div className="App">
        <ThemeProvider theme={theme}>
          <Grid container spacing={10} alignItems="center" justify="center">
            <Grid item md={12}>
              <AppHeader handler={this.changeContent.bind(this)}/>
            </Grid>
            <Grid item>
                <PageContent selected={this.state.selected}/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

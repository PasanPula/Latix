import React, { Component } from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import SinglePlayerLogin from './SinglePlayer.Login';
import SinglePlayerCreate from './SinglePlayer.Create';

export default class SinglePlayer extends Component {

    constructor(props)
   {
     super(props);
     this.setName = this.setName.bind(this);
     this.state = {
         name:""
     }
   }

      
   setName(value)
   {
       this.setState({
        name:value
       });
   }

    render() {
        return (
            <div>
            <Switch>
            <Route  path="/SinglePlayer/Login" component={()=> <SinglePlayerLogin name={this.state.name} OnChange={this.setName} />}/>
            <Route  path="/SinglePlayer/Create" component={()=> <SinglePlayerCreate name={this.state.name} />} />
            <Redirect to="/SinglePlayer/Login" /> 
          </Switch>
            </div>
        )
    }
}

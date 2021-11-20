import Home from './Componenet/Home/Home';
import {Switch, Route} from 'react-router-dom';
import SinglePlayer from './Componenet/SinglePlayer/SinglePlayer';

function App() {
  return (
      <div className="background">
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SinglePlayer" component={SinglePlayer}/>
          {/* <Route path="/Multi_play" exact component={MultiPlayer}/> */}
        </Switch>
      </div>
    
  );
}



export default App;

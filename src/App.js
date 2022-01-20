import Home from "./Home/Home"
import {Switch, Route} from 'react-router-dom';
import MultiPlayer from "./MultiPlayer/MultiPlayer";
import SinglePlayer from './SinglePlayer/SinglePlayer';
import Background from "./Componenet/background/background";
import NoMobile from "./Componenet/not available mobile/no.mobile";

function App() {
  return (
      <div>
         <NoMobile/>
        <Background />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SinglePlayer" component={SinglePlayer}/>
          <Route path="/Multiplay" component={MultiPlayer}/>
        </Switch>
      </div>
    
  );
}



export default App;


import './App.css';
import './Home.css';
import Home from './Home';
import Single_play from './Single_play/Single_play';
import Multi_play from './Multi_play/Multi_play';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class="background">
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Single_play" exact component={Single_play}/>
          <Route path="/Multi_play" exact component={Multi_play}/>
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;

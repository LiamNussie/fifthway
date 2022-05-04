import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';

function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
          </Switch>
      </div>
  );
}

export default App;

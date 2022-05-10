import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import {useEffect} from "react"
import Aos from 'aos';
import "aos/dist/aos.css"
import Expertise from './pages/expertise/expertise';

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/expertise" component={Expertise} />
          </Switch>
      </div>
  );
}

export default App;

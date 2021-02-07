import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';


function App() {
  return (
    <ProjectState >
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
    </ProjectState>
  );
}

export default App;

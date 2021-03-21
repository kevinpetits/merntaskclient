import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import authToken from './config/authToken';
import PrivateRoute from './components/routes/PrivateRoute';


//Check if we have a token
const token = localStorage.getItem('token');
if(token){
  authToken(token);
}

function App() {
  return (
    <div className="wrapper bg-dark">
    <ProjectState >
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
    </div>
  );
}

export default App;

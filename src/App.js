import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import EmployerDelete from "./EmployerDelete";
import EmployerLogin from "./EmployerLogin";
import EmployerRegister from "./EmployerRegister";
import Home from "./Home";
import Navbar from './Navbar';
import SeekerDelete from "./SeekerDelete";
import SeekerLogin from "./SeekerLogin";
import SeekerRegister from "./SeekerRegister";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "/seeker-register">
              <SeekerRegister/>
            </Route>
            <Route path = "/seeker-login">
              <SeekerLogin/>
            </Route>
            <Route path = "/seeker-delete">
              <SeekerDelete/>
            </Route>
            <Route path = "/employer-register">
              <EmployerRegister/>
            </Route>
            <Route path = "/employer-login">
              <EmployerLogin/>
            </Route>
            <Route path = "/employer-delete">
              <EmployerDelete/>
            </Route>
          </Switch>
          
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;

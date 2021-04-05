import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StoriesContainer from '../../containers/StoriesContainer';
import LoginContainer from '../../containers/LoginContainer';
import LogoutContainer from '../../containers/LogoutContainer';
import Navbar from '../../components/Navbar';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login" exact>
            <LoginContainer isLoginMode />
          </Route>
          <Route path="/signup" exact>
            <LoginContainer isLoginMode={false} />
          </Route>
          <Route path="/logout" component={LogoutContainer} />
          <Route path="/" component={StoriesContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

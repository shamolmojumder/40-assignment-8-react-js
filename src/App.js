import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {

  return (
    <div>
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path="/">
            <Home />
      </Route>
        <Route path="/detail/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;

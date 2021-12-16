import {Route, Switch} from 'react-router-dom';

import AllMovies from './pages/AllMovies';
import NewMovies from './pages/NewMovie';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return <div>
    <Layout>
    <Switch>
    <Route path='/' exact>
      <AllMovies />
    </Route>
    <Route path='/new-movie'><NewMovies />
    </Route>
    <Route path='/all-movie'><AllMovies />
    </Route>
    <Route path='/favorites'><Favorites />
    </Route>
    </Switch>
    </Layout>
    </div>
}

export default App;

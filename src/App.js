import {Route, Switch} from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return <div>
    <Layout>
    <Switch>
    <Route path='/' exact>
      <AllMeetups />
    </Route>
    <Route path='/new-meetup'><NewMeetups />
    </Route>
    <Route path='/all-meetup'><AllMeetups />
    </Route>
    <Route path='/favorites'><Favorites />
    </Route>
    </Switch>
    </Layout>
    </div>
}

export default App;

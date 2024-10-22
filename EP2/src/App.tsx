import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, searchOutline, layersOutline, chatbubbleOutline, personOutline  } from 'ionicons/icons';
import Home from './pages/Home';
import Search from './pages/Search';
import Jobs from './pages/Jobs';
import Messages from './pages/Messages';
import Account from './pages/Account';
import CreateJob from './pages/CreateJob';
import AcceptJob from './pages/AcceptJob';
import AdminPage from './pages/AdminPage';
import Friend from './pages/Friend';
import LogIn from './pages/LogIn';
import PrivateMessages from './pages/PrivateMessages';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import FinalizeJob from './pages/FinalizeJob';
import FriendsList from './pages/FriendsList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/AdminPage">
          <AdminPage />
        </Route>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/Tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/Tabs/Home">
                <Home />
              </Route>
              <Route path="/Tabs/Search">
                <Search />
              </Route>
              <Route path="/Tabs/Jobs">
                <Jobs />
              </Route>
              <Route path="/Tabs/Messages">
                <Messages />
              </Route>
              <Route path="/Tabs/Account">
                <Account />
              </Route>
              <Route path="/Tabs/CreateJob">
                <CreateJob />
              </Route>
              <Route path="/Tabs/FriendsList">
                <FriendsList />
              </Route>
              <Route path="/Tabs/AcceptJob">
                <AcceptJob />
              </Route>
              <Route path="/Tabs/Friend">
                <Friend />
              </Route>
              <Route path="/Tabs/PrivateMessages">
                <PrivateMessages />
              </Route>
              <Route path="/Tabs/Settings">
                <Settings />
              </Route>
              <Route path="/Tabs/FinalizeJob">
                <FinalizeJob />
              </Route>
              <Route exact path="/">
                <Redirect to="/Tabs/Home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Home" href="/Tabs/Home">
                <IonIcon aria-hidden="true" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Search" href="/Tabs/Search">
                <IonIcon aria-hidden="true" icon={searchOutline} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Jobs" href="/Tabs/Jobs">
                <IonIcon aria-hidden="true" icon={layersOutline} />
                <IonLabel>Jobs</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Messages" href="/Tabs/Messages">
                <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
                <IonLabel>Messages</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Account" href="/Tabs/Account">
                <IonIcon aria-hidden="true" icon={personOutline} />
                <IonLabel>Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;

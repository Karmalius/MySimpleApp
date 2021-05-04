import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Bookshelf from "./pages/Bookshelf";
import Book from "./pages/Book";
import Menu from "./components/Menu";

import "@ionic/react/css/core.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route exact path="/book">
            <Book />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;

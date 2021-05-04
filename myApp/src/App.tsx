// Importing components.
// With these the app’s URL can match with the components we want to render.
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
//Importing page components we will be able to navigate to in app.
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Bookshelf from "./pages/Bookshelf";
import Book from "./pages/Book";
import Account from "./pages/Account";
import Menu from "./components/Menu";
// Importing Core CSS required for Ionic components to work properly
import "@ionic/react/css/core.css";

// Router defines the routing inside the app.
// IonSplitPane allows menu to be displayed as the viewport width increases.
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
          <Route exact path="/account">
            <Account />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;

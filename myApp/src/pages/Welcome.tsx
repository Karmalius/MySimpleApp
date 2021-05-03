import { IonContent,IonPage, IonToolbar, IonButton, IonThumbnail, IonImg, IonRouterOutlet,  } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import './Welcome.css';
import { IonReactRouter } from '@ionic/react-router';
import LogIn from './LogIn';

const directLogIn = () => {
  return (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/LogIn">
        <LogIn />
      </Route>
      <Route exact path="/">
        <Redirect to="/LogIn" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
  )
}

const Welcome: React.FC = () => {

  

  return (
    <IonPage>
      <IonToolbar className="toolbar">
      </IonToolbar>
      <IonContent fullscreen>

        <IonThumbnail>
        <IonImg src={"assets/img/logo.jpg"} />
    </IonThumbnail>
      <IonButton expand="full" className="login" onClick={directLogIn}>Log in</IonButton>
      <IonButton expand="full" className="signup">Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

import {
  IonContent,
  IonPage,
  IonToolbar,
  IonButton,
  IonThumbnail,
  IonImg,
} from "@ionic/react";

import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonThumbnail className="pic">
          <IonImg src={"assets/img/logo.jpg"} />
        </IonThumbnail>
        <IonButton expand="full" className="login" routerLink="/LogIn">
          Log in
        </IonButton>
        <IonButton expand="full" className="signup" routerLink="/SignUp">
          Sign up
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

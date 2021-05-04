// Importing components used on this page.
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonButton,
  IonThumbnail,
  IonHeader,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonAlert,
  IonLabel,
} from "@ionic/react";

// Importing stylesheet
import "./LogIn.css";

// Importing icons used on this page.
import { arrowBack } from "ionicons/icons";
import { logoFacebook } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoGoogle } from "ionicons/icons";

// Importing useState.
import React, { useState } from "react";

const LogIn: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  // Log in page has a button with icon that navigates back to welcome page.
  // It also has list with input fiels and buttons.
  // When buttons are clicked they show an alert.
  // There is not any function to actually log in.
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButton className="hide" size="small" routerLink="/Welcome">
            <IonIcon icon={arrowBack}></IonIcon>Log in to MyBookLibrary
          </IonButton>
        </IonHeader>
        <IonThumbnail>
          <IonList>
            <IonItem className="input">
              <IonLabel position="stacked">E-mail</IonLabel>
              <IonInput placeholder="Enter your e-mail here"> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput placeholder="Enter your password"> </IonInput>
            </IonItem>
          </IonList>
        </IonThumbnail>
        <IonButton
          expand="block"
          className="login"
          onClick={() => setShowAlert(true)}
        >
          Log in
        </IonButton>
        <p>OR</p>
        <IonButton
          expand="block"
          className="login"
          onClick={() => setShowAlert2(true)}
        >
          <IonIcon icon={logoFacebook}></IonIcon>Log in with Facebook
        </IonButton>
        <IonButton
          expand="block"
          className="twitter"
          onClick={() => setShowAlert2(true)}
        >
          <IonIcon icon={logoTwitter}></IonIcon>Log in with Twitter
        </IonButton>
        <IonButton
          expand="block"
          className="google"
          onClick={() => setShowAlert2(true)}
        >
          <IonIcon icon={logoGoogle}></IonIcon>Log in with Google
        </IonButton>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          header={"Log in failed!"}
          message={
            "Your login has failed. Check that your e-mail and password are correct. If you do not have an account, you must create one first."
          }
          buttons={["Continue"]}
        />
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass="my-custom-class"
          header={"Log in failed!"}
          message={"This feature is not in use."}
          buttons={["Continue"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default LogIn;

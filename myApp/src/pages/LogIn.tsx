import { IonContent,IonPage, IonToolbar, IonButton, IonThumbnail, IonHeader, IonIcon, IonList, IonItem, IonLabel, IonInput  } from '@ionic/react';
import './LogIn.css';
import { arrowBack } from "ionicons/icons"
import { logoFacebook } from "ionicons/icons"
import { logoTwitter } from "ionicons/icons"
import { logoGoogle } from "ionicons/icons"

const LogIn: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar">
      </IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
            <IonIcon icon={arrowBack}></IonIcon>Log in to MyBookLibrary</IonHeader>
        <IonThumbnail>
        <IonList>
        <IonItem className="input">
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput placeholder="Enter your name here"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">E-mail</IonLabel>
            <IonInput placeholder="Enter your e-mail here"> </IonInput>
          </IonItem>
        </IonList>
    </IonThumbnail>
    <IonButton expand="full" className="login">Log in</IonButton>
    <p>OR</p>
    <IonButton expand="full" className="login"><IonIcon icon={logoFacebook}></IonIcon>Log in with Facebook</IonButton>
    <IonButton expand="full" className="twitter"><IonIcon icon={logoTwitter}></IonIcon>Log in with Twitter</IonButton>
    <IonButton expand="full" className="google"><IonIcon icon={logoGoogle}></IonIcon>Log in with Google</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
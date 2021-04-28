import { IonContent,IonPage, IonToolbar, IonButton, IonThumbnail, IonHeader, IonIcon, IonList, IonItem, IonLabel, IonInput, IonAlert  } from '@ionic/react';
import './LogIn.css';
import { arrowBack } from "ionicons/icons"
import { logoFacebook } from "ionicons/icons"
import { logoTwitter } from "ionicons/icons"
import { logoGoogle } from "ionicons/icons"
import React, {useState} from 'react';

const LogIn: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

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
    <IonButton expand="block" className="login" onClick={() => setShowAlert(true)}>Log in</IonButton>
    <p>OR</p>
    <IonButton expand="block" className="login" onClick={() => setShowAlert2(true)}><IonIcon icon={logoFacebook}></IonIcon>Log in with Facebook</IonButton>
    <IonButton expand="block" className="twitter" onClick={() => setShowAlert2(true)}><IonIcon icon={logoTwitter}></IonIcon>Log in with Twitter</IonButton>
    <IonButton expand="block" className="google" onClick={() => setShowAlert2(true)}><IonIcon icon={logoGoogle}></IonIcon>Log in with Google</IonButton>
    <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Log in failed!'}
          message={'Your login has failed. Check that your e-mail and password are correct. If you do not have an account, you must create one first.'}
          buttons={['Continue']}
        />
    <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          header={'Log in failed!'}
          message={'This feature is not in use.'}
          buttons={['Continue']}
        />
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
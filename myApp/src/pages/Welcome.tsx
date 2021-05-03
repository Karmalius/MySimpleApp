import { IonContent,IonPage, IonToolbar, IonButton, IonThumbnail, IonImg,  } from '@ionic/react';
import './Welcome.css';



const Welcome: React.FC = () => {

  const onClickHandler = () => {};

  return (
    <IonPage>
      <IonToolbar className="toolbar">
      </IonToolbar>
      <IonContent fullscreen>

        <IonThumbnail>
        <IonImg src={"assets/img/logo.jpg"} />
    </IonThumbnail>
      <IonButton expand="full" className="login" routerLink="/LogIn"
            onClick={() => onClickHandler()}>Log in</IonButton>
      <IonButton expand="full" className="signup">Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

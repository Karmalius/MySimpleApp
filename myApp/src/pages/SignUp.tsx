import { IonContent,IonPage, IonToolbar, IonButton, IonThumbnail, IonHeader, IonIcon  } from '@ionic/react';
import './SignUp.css';
import { arrowBack } from "ionicons/icons"

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar">
      </IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
            <IonIcon icon={arrowBack}></IonIcon>Sign up</IonHeader>
        <IonThumbnail>
        <p>Here comes some text</p>
    </IonThumbnail>
      <IonButton expand="full" className="createnew">Create a new account</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
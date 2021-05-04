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
  IonLabel,
  IonInput,
} from "@ionic/react";

// Importing stylesheet
import "./SignUp.css";

// Importing icon used on this page
import { arrowBack } from "ionicons/icons";

// SignUp page has a button with icon that navigates back to welcome page.
// There is also list with input fiels and a button that navigates to bookshelf page.
// There is not any function to actually create an account.
const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButton className="hide" size="small" routerLink="/Welcome">
            <IonIcon icon={arrowBack}></IonIcon>Sign up
          </IonButton>
        </IonHeader>
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
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput placeholder="Create a new password"> </IonInput>
            </IonItem>
          </IonList>
        </IonThumbnail>
        <IonButton size="small" className="createnew" routerLink="/Bookshelf">
          Create a new account
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

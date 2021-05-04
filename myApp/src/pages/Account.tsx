import {
  IonContent,
  IonPage,
  IonToolbar,
  IonHeader,
  IonCard,
  IonImg,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonRow,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

import "./Account.css";

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButtons>
            <IonMenuButton menu="menu" autoHide={false} />
          </IonButtons>
        </IonHeader>
        <IonCard className="profile">
          <IonCardContent>
            <IonAvatar>
              <IonImg src={"assets/img/profile.png"} />
            </IonAvatar>
            <IonButton size="small" className="addpicture">
              Add profile picture
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonList lines="none">
          <IonItem>
            <IonLabel>
              <h2>Name</h2>
              <p>Example Name</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>E-mail</h2>
              <p>example@example.com</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>App theme</h2>
            </IonLabel>
          </IonItem>
          <IonRow>
            <IonCheckbox checked />
            <IonLabel className="color">Purple</IonLabel>
          </IonRow>
          <IonRow>
            <IonCheckbox />
            <IonLabel className="color">Green</IonLabel>
          </IonRow>
          <IonRow>
            <IonCheckbox />
            <IonLabel className="color">Black</IonLabel>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Account;

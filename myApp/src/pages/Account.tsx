import {
    IonContent,
    IonPage,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonCard,
    IonImg,
    IonCardContent,
    IonButton,
    IonAvatar,


  } from "@ionic/react";
  import "./Account.css";
  import { menuOutline } from "ionicons/icons";

  
  const Bookshelf: React.FC = () => {
    return (
      <IonPage>
        <IonToolbar className="toolbar"></IonToolbar>
        <IonContent fullscreen>
          <IonHeader className="header">
          <IonIcon icon={menuOutline}></IonIcon>Account
          </IonHeader>
          <IonCard className="profile">
          <IonCardContent>
              <IonAvatar>
          <IonImg src={"assets/img/profile.png"} />
          </IonAvatar>
          <IonButton size="small" className="addpicture">Add profile picture</IonButton>
      </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Bookshelf;
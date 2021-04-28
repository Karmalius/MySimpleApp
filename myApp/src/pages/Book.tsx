import {
    IonContent,
    IonPage,
    IonToolbar,
    IonHeader,
    IonIcon,
  } from "@ionic/react";
  import "./Bookshelf.css";
  import { arrowBack } from "ionicons/icons";

  
  const Bookshelf: React.FC = () => {
    return (
      <IonPage>
        <IonToolbar className="toolbar"></IonToolbar>
        <IonContent fullscreen>
          <IonHeader className="header">
          <IonIcon icon={arrowBack}></IonIcon>Book Example
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Bookshelf;
  
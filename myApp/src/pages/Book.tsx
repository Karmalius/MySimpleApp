import {
    IonContent,
    IonPage,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonCard,
    IonCardContent,
    IonImg,

  } from "@ionic/react";
  import "./Book.css";
  import { arrowBack } from "ionicons/icons";

  
  const Bookshelf: React.FC = () => {
    return (
      <IonPage>
        <IonToolbar className="toolbar"></IonToolbar>
        <IonContent fullscreen>
          <IonHeader className="header">
          <IonIcon icon={arrowBack}></IonIcon>Book Example
          </IonHeader>
          <IonCard>
          <IonCardContent>
          <IonImg src={"assets/img/gothic.jpg"} />
          Sed ut perspiciatis, unde omnis iste natus error sit 
          voluptatem accusant doloremque laudantium, totam rem 
          aperiam eaque ipsa, quae ab illo inventore veritatis.
      </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Bookshelf;
  
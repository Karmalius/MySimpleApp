import {
  IonContent,
  IonPage,
  IonToolbar,
  IonHeader,
  IonIcon,
  IonCard,
  IonCardContent,
  IonImg,
  IonButton,
} from "@ionic/react";

import "./Book.css";
import { arrowBack } from "ionicons/icons";

const Book: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButton className="hide" size="small" routerLink="/Bookshelf">
            <IonIcon icon={arrowBack}></IonIcon>Book Example
          </IonButton>
        </IonHeader>
        <IonCard className="bookCard">
          <IonCardContent>
            <IonImg src={"assets/img/gothic.jpg"} />
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusant doloremque laudantium, totam rem aperiam eaque ipsa, quae
            ab illo inventore veritatis.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Book;

import {
  IonContent,
  IonPage,
  IonHeader,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonButtons,

} from "@ionic/react";
import "./Bookshelf.css";
import { addCircle } from "ionicons/icons";

const Bookshelf: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButtons>
            <IonMenuButton menu="menu" autoHide={false} />
          </IonButtons>
        </IonHeader>
        <IonList>
          <IonItem routerLink="/Book">
            <IonLabel>
              <h2>Book Example</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/Book">
            <IonLabel>
              <h2>Book Title</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/Book">
            <IonLabel>
              <h2>Book Title</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/Book">
            <IonLabel>
              <h2>Book Title</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonIcon icon={addCircle} className="add"></IonIcon>
      </IonContent>
    </IonPage>
  );
};

export default Bookshelf;

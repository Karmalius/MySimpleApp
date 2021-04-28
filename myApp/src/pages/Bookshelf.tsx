import {
  IonContent,
  IonPage,
  IonToolbar,
  IonHeader,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./Bookshelf.css";
import { menuOutline } from "ionicons/icons";
import { searchOutline } from "ionicons/icons";
import { addCircle } from "ionicons/icons";

const Bookshelf: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar"></IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonIcon icon={menuOutline} className="menu"></IonIcon>Bookshelf
          <IonIcon icon={searchOutline} className="search"></IonIcon>
        </IonHeader>

        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Book Example</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>Book Title</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>Book Title</h2>
              <p>Sed ut perspiciatis, unde omnis iste</p>
              <p> natus error sit voluptatem </p>
              <p>accusantium dolorem..</p>
            </IonLabel>
          </IonItem>
          <IonItem>
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

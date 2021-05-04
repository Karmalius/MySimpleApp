// Importing components used on this page.
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
  IonTitle,
} from "@ionic/react";

// Importing stylesheet
import "./Bookshelf.css";

// Importing an icon used on this page.
import { addCircle } from "ionicons/icons";

// Bookhelf page has menu button that opens menu page.
// It also has list with items. When items are clicked they navigate to the Book page.
const Bookshelf: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="header">
          <IonButtons>
            <IonMenuButton menu="menu" autoHide={false} />
            <IonTitle>Bookshelf</IonTitle>
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

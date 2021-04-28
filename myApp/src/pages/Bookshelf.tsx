import { IonContent,IonPage, IonToolbar, IonThumbnail, IonHeader, IonIcon, IonList, IonItem,  } from '@ionic/react';
import './Bookshelf.css';
import { menuOutline } from "ionicons/icons"

const Bookshelf: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="toolbar">
      </IonToolbar>
      <IonContent fullscreen>
        <IonHeader className="header">
            <IonIcon icon={menuOutline}></IonIcon>Bookshelf</IonHeader>
        <IonThumbnail>
        <IonList>
        </IonList>
    </IonThumbnail>
      </IonContent>
    </IonPage>
  );
};

export default Bookshelf;
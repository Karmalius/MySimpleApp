import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  useIonToast,
} from "@ionic/react";
import { menuController } from "@ionic/core";

const Menu: React.FC = (props) => {
  // Create a click handler to close the menu
  const onClickHandler = (): void => {
    menuController.close();
  };

  const [present] = useIonToast();

  return (
    <React.Fragment>
      <IonMenu
        side="start"
        menuId="sidemenu"
        contentId="main"
        swipe-gesture={true}
        disabled={false}
        maxEdgeStart={100}
        hidden={false}
        type="overlay"
      >
        <IonHeader translucent>
          <IonToolbar className="top">
            <IonItem lines="none">
              <IonButtons>
                <IonMenuButton
                  color="light"
                  autoHide={true}
                  onClick={() => onClickHandler()}
                ></IonMenuButton>
              </IonButtons>
              <IonLabel color="light">Menu</IonLabel>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            <IonItem>
              <IonButtons>
                <IonButton routerLink="./pages/Bookshelf">Bookshelf</IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonButtons>
                <IonButton>Account</IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonButtons>
                <IonButton>Log out</IonButton>
              </IonButtons>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </React.Fragment>
  );
};

export default Menu;

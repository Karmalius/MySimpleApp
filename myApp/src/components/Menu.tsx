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
} from "@ionic/react";
import { menuController } from "@ionic/core";

const Menu: React.FC = (props) => {
  // Create a click handler to close the menu
  const onClickHandler = (): void => {
    menuController.close();
  };

  return (
    <>
      <IonMenu
        side="start"
        menuId="menu"
        contentId="main"
        swipe-gesture={true}
        disabled={false}
        maxEdgeStart={100}
        hidden={false}
        type="overlay"
      >
        <IonHeader className="header">
          <IonToolbar>
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
                <IonButton routerLink="/Bookshelf" onClick={() => onClickHandler()}>
                  Bookself
                </IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonButtons>
                <IonButton routerLink="/Account" onClick={() => onClickHandler()}>
                  Account
                </IonButton>
              </IonButtons>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;

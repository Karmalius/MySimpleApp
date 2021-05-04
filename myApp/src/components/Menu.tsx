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
import "./Menu.css";

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
        <IonToolbar className="toolbar"></IonToolbar>
        <IonContent>
          <IonHeader className="header">
            <IonToolbar>
              <IonItem lines="none">
                <IonButtons>
                  <IonMenuButton
                    autoHide={true}
                    onClick={() => onClickHandler()}
                  ></IonMenuButton>
                </IonButtons>
                <IonLabel>Menu</IonLabel>
              </IonItem>
            </IonToolbar>
          </IonHeader>
          <IonList lines="none">
            <IonItem>
              <IonButtons>
                <IonButton
                  routerLink="/Bookshelf"
                  onClick={() => onClickHandler()}
                >
                  Bookself
                </IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonButtons>
                <IonButton
                  routerLink="/Account"
                  onClick={() => onClickHandler()}
                >
                  Account
                </IonButton>
              </IonButtons>
            </IonItem>
            <IonItem>
              <IonButtons>
                <IonButton
                  routerLink="/Welcome"
                  onClick={() => onClickHandler()}
                >
                  Log out
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

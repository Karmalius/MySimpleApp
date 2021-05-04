import React from "react";
// Importing components used on this page.
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

// Importing menucontroller that is used to control the menu
import { menuController } from "@ionic/core";
// Importing stylesheet
import "./Menu.css";

const Menu: React.FC = (props) => {
// Creating onclickhandler to close the menu
  const onClickHandler = (): void => {
    menuController.close();
  };

  // The menu page has buttons that navigate to Bookself, Account and Welcome pages.
  // The log out button does not log out. It just redirects us to welcome page because there is no option to log in.
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

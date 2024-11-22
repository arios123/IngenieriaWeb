import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonButton, IonIcon, IonList, IonLabel, IonFooter, IonInput } from '@ionic/react';
import { arrowBackOutline, sendOutline } from 'ionicons/icons';
import './PrivateMessages.css';

const PrivateMessages: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className=" ion-padding-top">
        <IonToolbar>
          <div className='header-container-createjob'>
            <IonRouterLink routerLink="/tabs/messages">
              <IonButton className='back-arrow' fill="clear">
                <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
              </IonButton>
            </IonRouterLink>
            <IonTitle>Oliver</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className='txt-container'>
          <IonLabel className='reciever-txt'>Puedes venir manana por la tarde?</IonLabel>
          <IonLabel className='sender-txt'>Tendria que ser despues de las 5</IonLabel>
          <IonLabel className='reciever-txt'>Ya</IonLabel>
          <IonLabel className='reciever-txt'>Me avisas cuando estas afuera</IonLabel>
          <IonLabel className='sender-txt'>👍</IonLabel>
        </IonList>
      </IonContent>
        <IonFooter className="floating-footer ion-no-border">
          <IonToolbar className="custom-toolbar">
            <div className='msg-footer'>
              <IonInput 
                aria-label="Custom input"
                placeholder="Escribe Mensaje..." 
                className="custom-input"
              />
              <IonButton fill='clear'>
                <IonIcon slot="icon-only" icon={sendOutline} style={{color: "black"}}></IonIcon>
              </IonButton>
            </div>
          </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default PrivateMessages;

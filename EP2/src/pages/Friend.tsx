import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonButton, IonLabel, IonAvatar, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './Friend.css';

const Friend: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <div className='header-container-createjob'>
            <IonRouterLink routerLink="/tabs/search">
              <IonButton className='back-arrow' fill="clear">
                <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
              </IonButton>
            </IonRouterLink>
            <IonTitle>Friend</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='center-container'>
          <IonAvatar className='profile-avatar'>
            <IonLabel >J</IonLabel>
          </IonAvatar>
        </div>
        <div className='info-vertical'>
          <IonLabel className='profile-name'>James</IonLabel>
          <IonLabel>Santiago, CL</IonLabel>
          <div className='numfriend-box-container'><IonLabel>2,673 Amigos</IonLabel></div>
        </div>
        <div className='friend-boxes'> 
          <div style={{ marginRight: '8px'}}>
            <IonButton className='friend-box-container' fill="clear">Amigo</IonButton>
          </div>
          <div style={{ marginLeft: '8px'}}>
            <IonRouterLink slot="end" routerLink="/tabs/privatemessages">
              <IonButton className='friend-box-container' fill="clear">Mensaje</IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Friend;

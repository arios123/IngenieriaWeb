import { IonContent, IonPage, IonAvatar, IonLabel, IonList, IonItem, IonHeader, IonToolbar, IonRouterLink, IonButton, IonIcon } from '@ionic/react';
import './Account.css';
import { settingsSharp } from 'ionicons/icons';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar >
          <IonRouterLink slot="end" routerLink="/tabs/settings">
          <IonButton className='settings-button' fill="clear">
            <IonIcon slot="icon-only" icon={settingsSharp}></IonIcon>
          </IonButton>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <div className='center-container'>
            <IonAvatar className='profile-avatar'>
              <IonLabel >Yo</IonLabel>
            </IonAvatar>
          </div>
          <div className='info-vertical'>
            <IonLabel className='profile-name'>Jonathan</IonLabel>
            <IonLabel style={{ marginBottom: '15px'}}>Jonathan.Hogala@gmail.com</IonLabel>
            <IonLabel>Santiago, CL</IonLabel>
          </div>
          <div className='profile-boxes'>
            <div className='profile-box-container' style={{ marginRight: '15px'}}>
              {/* <IonRouterLink slot="end" routerLink="/tabs/friendslist"> */}
                <IonLabel className='friends-button'>2,673 Amigos</IonLabel>
              {/* </IonRouterLink> */}
            </div>
            <div className='profile-box-container' style={{ marginLeft: '15px'}}><IonLabel>67 Horas</IonLabel></div>
          </div>
          <IonList>
            <IonItem className='profile-jobs' style={{ borderColor: '#879939'}}>
              <IonLabel>Pintar - 3 hrs</IonLabel>
              <IonLabel className='ion-text-right'>James</IonLabel>
            </IonItem>
            <IonItem className='profile-jobs' style={{ borderColor: '#879939'}}>
              <IonLabel>Transporte - 1 hr</IonLabel>
              <IonLabel className='ion-text-right'>Javier</IonLabel>
            </IonItem>
            <IonItem className='profile-jobs' style={{ borderColor: '#E26D53'}}>
              <IonLabel>Arreglar Auto - 8 hrs</IonLabel>
              <IonLabel className='ion-text-right'>Abigail</IonLabel>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Account;

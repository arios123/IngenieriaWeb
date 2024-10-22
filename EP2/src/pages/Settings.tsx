import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonButton } from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='settings-boxes'>
          <div style={{ marginRight: '8px'}}>
            <IonRouterLink slot="end" routerLink="/login">
              <IonButton className='settings-box-container' fill="clear">Cambiar Usuario</IonButton>
            </IonRouterLink>
          </div>
          <div style={{ marginLeft: '8px'}}>
            <IonRouterLink slot="end" routerLink="/login">
              <IonButton className='settings-box-container' fill="clear">Borrar Cuenta</IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;

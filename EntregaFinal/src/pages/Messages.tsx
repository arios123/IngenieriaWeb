import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Messages.css';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonTitle>Mensajes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          <IonItem href="/tabs/privatemessages">
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel >J</IonLabel>
            </IonAvatar>
            <div className='msg-name'>
              <IonLabel style={{ fontWeight: 'bold', paddingBottom: '5px'}}>James</IonLabel>
              <IonLabel>¡Se me olvidó contarte, adivina qué me pasó hoy!</IonLabel>
            </div>
          </IonItem>
          <IonItem href="/tabs/privatemessages" className='ion-wrap'>
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel >O</IonLabel>
            </IonAvatar>
            <div className='msg-name'>
              <IonLabel style={{ fontWeight: 'bold', paddingBottom: '5px'}}>Oliver</IonLabel>
              <IonLabel>👍</IonLabel>
            </div>
          </IonItem>
          <IonItem href="/tabs/privatemessages">
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel >S</IonLabel>
            </IonAvatar>
            <div className='msg-name'>
              <IonLabel style={{ fontWeight: 'bold', paddingBottom: '5px'}}>Stephanie</IonLabel>
              <IonLabel>Espera, ¿me quisiste enviar eso a mí? 😂</IonLabel>
            </div>
          </IonItem>
          <IonItem href="/tabs/privatemessages">
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel >T</IonLabel>
            </IonAvatar>
            <div className='msg-name'>
              <IonLabel style={{ fontWeight: 'bold', paddingBottom: '5px'}}>Thomas</IonLabel>
              <IonLabel>Ya, nos vemos entonces</IonLabel>
            </div>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton className=''>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Messages;

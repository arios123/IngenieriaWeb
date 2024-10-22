import { IonContent, IonHeader, IonPage, IonSearchbar, IonToolbar, IonFooter, IonItem, IonLabel, IonList, IonButton, IonAvatar, IonIcon } from '@ionic/react';
import { trash, brush } from 'ionicons/icons';
import './AdminPage.css';

const AdminPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonSearchbar class="custom-search-bar"></IonSearchbar>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonItem>
          <IonLabel>Gente</IonLabel>
        </IonItem>
        <IonList lines="none">
          <IonItem>
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel>J</IonLabel>
            </IonAvatar>
            <div className='person-container'>
              <div className='msg-name2'>
                <IonLabel style={{ fontWeight: 'bold'}}>James</IonLabel>
              </div>
              <div className='msg-name2'><IonLabel style={{ fontWeight: 'bold'}} className='ion-text-center'>61 hrs</IonLabel></div>
              <div>
                <IonButton fill='clear'><IonIcon style={{color: '#E26D53'}} icon={trash}></IonIcon></IonButton>
                <IonButton fill='clear'><IonIcon style={{color: 'black'}} icon={brush}></IonIcon></IonButton>
              </div>
            </div>
          </IonItem>
          <IonItem className='ion-wrap'>
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel>J</IonLabel>
            </IonAvatar>
            <div className='person-container'>
              <div className='msg-name2'>
                <IonLabel style={{ fontWeight: 'bold'}}>Jonathan</IonLabel>
              </div>
              <div className='msg-name2'><IonLabel style={{ fontWeight: 'bold'}} className='ion-text-center'>61 hrs</IonLabel></div>
              <div>
                <IonButton fill='clear'><IonIcon style={{color: '#E26D53'}} icon={trash}></IonIcon></IonButton>
                <IonButton fill='clear'><IonIcon style={{color: 'black'}} icon={brush}></IonIcon></IonButton>
              </div>
            </div>
          </IonItem>
          <IonItem >
            <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
              <IonLabel>J</IonLabel>
            </IonAvatar>
            <div className='person-container'>
              <div className='msg-name2'>
                <IonLabel style={{ fontWeight: 'bold'}}>Javier</IonLabel>
              </div>
              <div className='msg-name2'><IonLabel style={{ fontWeight: 'bold'}} className='ion-text-center'>61 hrs</IonLabel></div>
              <div>
                <IonButton fill='clear'><IonIcon style={{color: '#E26D53'}} icon={trash}></IonIcon></IonButton>
                <IonButton fill='clear'><IonIcon style={{color: 'black'}} icon={brush}></IonIcon></IonButton>
              </div>
            </div>
          </IonItem>
        </IonList>
      </IonContent>


      <IonFooter className="floating-footer ion-no-border">
        <IonToolbar className='testing3'>
          <div className='center-content'>
            <IonButton fill='clear' className='admin-close-button' href="/login">Cerrar Sesion</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default AdminPage;

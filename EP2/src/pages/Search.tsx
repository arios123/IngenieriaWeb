import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonAvatar} from '@ionic/react';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonTitle>Buscar</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar class="custom"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonItem>
        <IonLabel>Gente</IonLabel>
      </IonItem>
      <IonList lines="none">
        <IonItem href="/tabs/friend">
          <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
            <IonLabel >J</IonLabel>
          </IonAvatar>
          <div className='msg-name'>
            <IonLabel style={{ fontWeight: 'bold'}}>James</IonLabel>
          </div>
        </IonItem>
        <IonItem href="/tabs/friend" className='ion-wrap'>
          <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
            <IonLabel >J</IonLabel>
          </IonAvatar>
          <div className='msg-name'>
            <IonLabel style={{ fontWeight: 'bold'}}>Jonathan</IonLabel>
          </div>
        </IonItem>
        <IonItem href="/tabs/friend">
          <IonAvatar aria-hidden="true" slot="start" className='avatar-label'>
            <IonLabel>J</IonLabel>
          </IonAvatar>
          <div className='msg-name'>
            <IonLabel style={{ fontWeight: 'bold'}}>Javier</IonLabel>
          </div>
        </IonItem>
      </IonList>
      <IonItem>
        <IonLabel>Trabajo</IonLabel>
      </IonItem>
      <IonList lines="none" className='Test'>
          <IonItem href="/tabs/acceptjob">
            <IonLabel>Pintar</IonLabel>
            <IonLabel className='ion-text-right'>3 hrs</IonLabel>
          </IonItem>
          <IonItem href="/tabs/acceptjob">
            <IonLabel>Leer</IonLabel>
            <IonLabel className='ion-text-right'>1 hr</IonLabel>
          </IonItem>
          <IonItem href="/tabs/acceptjob">
            <IonLabel>Instalar Ventana</IonLabel>
            <IonLabel className='ion-text-right'>2 hrs</IonLabel>
          </IonItem>
          <IonItem href="/tabs/acceptjob">
            <IonLabel>Limpiar Casa</IonLabel>
            <IonLabel className='ion-text-right'>1.5 hrs</IonLabel>
          </IonItem>
          <IonItem href="/tabs/acceptjob">
            <IonLabel>Arreglar Auto</IonLabel>
            <IonLabel className='ion-text-right'>8 hrs</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Jobs.css';

const Jobs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonTitle>Trabajo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          <IonItem href="/tabs/finalizejob">
            <IonLabel>Pintar - 3 hrs</IonLabel>
            <IonLabel className='ion-text-right'>James</IonLabel>
          </IonItem>
          <IonItem href="/tabs/finalizejob">
            <IonLabel>Instalar Ventana - 2 hrs</IonLabel>
            <IonLabel className='ion-text-right'>Javier</IonLabel>
          </IonItem>
          <IonItem href="/tabs/finalizejob">
            <IonLabel>Arreglar Auto - 8 hrs</IonLabel>
            <IonLabel className='ion-text-right'>Abigail</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Jobs;

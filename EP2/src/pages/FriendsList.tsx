import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './FriendsList.css';

const FriendsList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <IonTitle>Trabajo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default FriendsList;

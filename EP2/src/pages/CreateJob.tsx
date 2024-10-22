import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonRouterLink, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './CreateJob.css';

const CreateJob: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <div className='header-container-createjob'>
          <IonRouterLink routerLink="/tabs/home">
            <IonButton className='back-arrow' fill="clear">
              <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
            </IonButton>
          </IonRouterLink>
          <IonTitle>Crear Nesesidad</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Titulo" class="custom"></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Horas" class="custom2"></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Donde" class="custom3"></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Descripcion" class="custom4" ></IonInput>
          </IonItem>
        </IonList>
        <div style={{ marginRight: '15px', marginLeft: '15px', background: '#879939'}}>
          <IonRouterLink  routerLink="/tabs/home">
            <IonButton fill="clear" expand="full" className='createjob2-box-container'>Crear</IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateJob;

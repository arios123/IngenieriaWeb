import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './AcceptJob.css';

const AcceptJob: React.FC = () => {
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
            <IonTitle>Empezar Trabajo</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Pintar</IonCardTitle>
            <IonCardSubtitle>3 hrs</IonCardSubtitle>
            <IonCardSubtitle>Santiago, CL</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Se necesita pintor para pintar una pared exterior de 10 metros de largo por 3 de alto. El trabajo incluye preparar la superficie, aplicar imprimación y dos capas de pintura resistente al clima. Se requiere experiencia en pintura exterior y uso de herramientas propias. La pintura será proporcionada.</IonCardContent>
          <IonCardSubtitle className='ion-text-right ion-card-footer'>James</IonCardSubtitle>
        </IonCard>
        <div className='acceptjob-boxes'>
          <div style={{ marginRight: '8px', background: '#879939'}}>
            <IonRouterLink slot="end" routerLink="/tabs/home">
              <IonButton className='acceptjob-box-container' fill="clear">Empezar</IonButton>
            </IonRouterLink>
          </div>
          <div style={{ marginLeft: '8px', background: '#E26D53'}}>
            <IonRouterLink slot="end" routerLink="/tabs/home">
              <IonButton className='acceptjob-box-container' fill="clear">Cancelar</IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AcceptJob;

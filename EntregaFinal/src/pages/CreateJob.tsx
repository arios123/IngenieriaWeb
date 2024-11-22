import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonRouterLink, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import axios from 'axios';
import './CreateJob.css';

const CreateJob: React.FC = () => {

  const [title,setTitle] = useState("");
  const [hours,setHours] = useState("");
  const [place,setPlace] = useState("");
  const [description,setDescription] = useState("");

  const Enviar=async() => {
    console.log("yes");
    try{
      const response = await axios.post('http://localhost:3000/posts/add',{
        "title":title,
        "hours":hours,
        "place":place,
        "description":description
      });
    }catch(error){
      console.error('Error al enviar los datos:', error);
    }
  }

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
            <IonInput aria-label="Custom input" placeholder="Titulo" class="custom" onIonChange={(e) => setTitle(e.detail.value!)} value={title}></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Horas" class="custom2" onIonChange={(e) => setHours(e.detail.value!)} value={hours}></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Donde" class="custom3" onIonChange={(e) => setPlace(e.detail.value!)} value={place}></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonInput aria-label="Custom input" placeholder="Descripcion" class="custom4" onIonChange={(e) => setDescription(e.detail.value!)} value={description}></IonInput>
          </IonItem>
        </IonList>
        <div style={{ marginRight: '15px', marginLeft: '15px', background: '#879939'}}>
          <IonRouterLink  routerLink="/tabs/home">
            <IonButton fill="clear" expand="full" className='createjob2-box-container' onClick={Enviar}>Crear</IonButton>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateJob;

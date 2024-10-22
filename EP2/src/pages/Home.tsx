import React, { useEffect, useState } from 'react';
import { IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetch('/datosEjemplares.json')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar >
          <IonTitle className="ion-text-left ion-justify-content-start">Nesesidades</IonTitle>
          <IonRouterLink slot="end" routerLink="/tabs/createjob">
          <IonButton className='testing'>
            <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
          </IonButton>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {cards.map((card) => (
          <IonCard routerLink="/tabs/acceptjob" key={card.id}>
            <IonCardHeader>
              <IonCardTitle>{card.titulo}</IonCardTitle>
              <IonCardSubtitle>{card.duracion} {card.duracion > 1 ? "hrs" : "hr"}</IonCardSubtitle>
              <IonCardSubtitle>{card.donde}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{card.descripcion}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;

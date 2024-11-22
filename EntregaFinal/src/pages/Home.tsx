import React, { useEffect, useState } from 'react';
import { IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink } from '@ionic/react';
import { addOutline, card } from 'ionicons/icons';
import axios from 'axios';
import './Home.css';

const Home: React.FC = () => {

  const [cards, setCards] = useState<any[]>([]);

  const Recuperar=async() => {
    try{
      const response = await axios.get('http://localhost:3000/posts/retrieve',{
      });
      if(response.data){
        console.log(response.data);
        setCards(response.data)
      }
    }catch(error){
      console.error('Error al enviar los datos:', error);
    }
  }

  useEffect(() => {
    // fetch('/datosEjemplares.json')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCards(data);
    //   })
    //   .catch((error) => console.error('Error fetching data:', error));

    Recuperar();

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
              <IonCardTitle>{card.title}</IonCardTitle>
              <IonCardSubtitle>{card.hours} {card.duracion > 1 ? "hrs" : "hr"}</IonCardSubtitle>
              <IonCardSubtitle>{card.place}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{card.description}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;

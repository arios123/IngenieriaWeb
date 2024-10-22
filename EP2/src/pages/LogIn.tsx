import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonInput, IonCheckbox, IonRouterLink, IonButton } from '@ionic/react';
import './LogIn.css';

const LogIn: React.FC = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.detail.checked); 
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='login-container'>
          <img src="/images/TIMEX 1Color.png" className='img-custom'/>
          <IonList>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Email" class="login-custom" ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña" class="login-custom2"></IonInput>
            </IonItem>
          </IonList>
          <div className='checkbox-container'>
          <IonCheckbox labelPlacement="end" className='checkbox' checked={isChecked} onIonChange={handleCheckboxChange}>Sesión Administrativa</IonCheckbox>
          </div>
          <div style={{ marginRight: '30px', marginLeft: '30px', background: '#879939'}}>
          <IonRouterLink  routerLink={isChecked ? "/adminpage" : "/tabs/home"}>
            <IonButton fill="clear" expand="full" className='login-box-container'>Iniciar sesión</IonButton>
          </IonRouterLink>
          </div>
          <a href="/signup" className='extra-buttons'>Crear cuenta</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;

import { IonContent, IonPage, IonList, IonItem, IonInput, IonCheckbox, IonRouterLink, IonButton } from '@ionic/react';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='login-container'>
          <img src="/images/TIMEX 1Color.png" className='img-custom'/>
          <IonList>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Nombre" class="signup-custom" ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Email" class="login-custom2"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="RUT" class="login-custom2"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Region" class="login-custom2"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Comuna" class="login-custom2"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña" class="login-custom2"></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña Confirmada" class="login-custom2"></IonInput>
            </IonItem>
          </IonList>
          <div className='checkbox-container'>
          <IonCheckbox labelPlacement="end" className='checkbox'>Accepto Terminos y Condiciones</IonCheckbox>
          </div>
          <div style={{ marginRight: '30px', marginLeft: '30px', background: '#879939'}}>
          <IonRouterLink  routerLink="/tabs/home">
            <IonButton fill="clear" expand="full" className='login-box-container'>Crear cuenta</IonButton>
          </IonRouterLink>
          </div>
          <a href="/login" className='extra-buttons'>Iniciar sesión</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

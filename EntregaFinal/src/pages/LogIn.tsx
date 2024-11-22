import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonInput, IonCheckbox, IonRouterLink, IonButton, IonText } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import axios from 'axios';
import './LogIn.css';

const LogIn: React.FC = () => {

  const router = useIonRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incompleteEmail, setIncompleteEmail] = useState(false);
  const [incompletePassword, setIncompletePassword] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.detail.checked); 
  };

  const Enviar=async() => {
    console.log("yes");
    try{
      const response = await axios.post('http://localhost:3000/usuarios/login',{
        "email":email,
        "password":password
      });
      if(response.data.length > 0){
        if(isChecked)
          router.push("/adminpage");
        else
          router.push("/tabs/home");
        setEmail('');
        setPassword('');
        
      }
    }catch(error){
      console.error('Error al enviar los datos:', error);
    }
  }

  const handleLoginIn = () =>{
    if(email != "" && password != ""){
      setIncompleteEmail(false)
      setIncompletePassword(false)
        Enviar();
    }else{
      if(email == "")
        setIncompleteEmail(true)
      else
        setIncompleteEmail(false)

      if(password == "")
        setIncompletePassword(true)
      else
        setIncompletePassword(false)
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='login-container'>
          <img src="/images/TIMEX 1Color.png" className='img-custom'/>
          <IonList className='testing1'>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Email" type="email" class="login-custom" required={true} onIonChange={(e) => setEmail(e.detail.value!)} value={email}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña" type="password" class="login-custom2" required={true} onIonChange={(e) => setPassword(e.detail.value!)} value={password}></IonInput>
            </IonItem>
            {incompleteEmail && <p className='error-message'>Por favor, completa este campo</p>}
            {incompletePassword && <p className='error-message2'>Por favor, completa este campo</p>}
          </IonList>
          <div className='checkbox-container'>
          <IonCheckbox labelPlacement="end" className='checkbox' checked={isChecked} onIonChange={handleCheckboxChange}>Sesión Administrativa</IonCheckbox>
          </div>
          <div style={{ marginRight: '30px', marginLeft: '30px', background: '#879939'}}>
            <IonButton fill="clear" expand="full" className='login-box-container' onClick={handleLoginIn}>Iniciar sesión</IonButton>
          </div>
          <a href="/signup" className='extra-buttons'>Crear cuenta</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;

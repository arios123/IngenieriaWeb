import { IonContent, IonPage, IonList, IonItem, IonInput, IonCheckbox, useIonRouter, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp: React.FC = () => {

  const router = useIonRouter();

  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incompleteName, setIncompleteName] = useState(false);
  const [incompleteEmail, setIncompleteEmail] = useState(false);
  const [incompleteRut, setIncompleteRut] = useState(false);
  const [incompleteRegion, setIncompleteRegion] = useState(false);
  const [incompleteComuna, setIncompleteComuna] = useState(false);
  const [incompletePassword, setIncompletePassword] = useState(false);
  const [incompleteConfirmPassword, setIncompleteConfirmPassword] = useState(false);
  const [incompleteChecked,setIncompleteChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.detail.checked); 
  };

  const Enviar=async() => {
    console.log("yes");
    try{
      const response = await axios.post('http://localhost:3000/usuarios/signup',{
        "name":name,
        "email":email,
        "rut":rut,
        "region":region,
        "comuna":comuna,
        "password":password
      });
    }catch(error){
      console.error('Error al enviar los datos:', error);
    }
  }

  const handleSignUp = () =>{
    if(name != "" && email != "" && rut != "" && region != "" && comuna != "" && password != "" && confirmPassword != "" && isChecked){
      setIncompleteName(false);
      setIncompleteEmail(false);
      setIncompleteRut(false);
      setIncompleteRegion(false);
      setIncompleteComuna(false);
      setIncompletePassword(false);
      setIncompleteConfirmPassword(false);
      setIncompleteChecked(false);
      setName("");
      setEmail("");
      setRut("");
      setRegion("");
      setComuna("");
      setPassword("");
      setConfirmPassword("");
      Enviar();
      router.push("/tabs/home");
    }else{
      if(name == "")
        setIncompleteName(true);
      else
        setIncompleteName(false);

      if(email == "")
        setIncompleteEmail(true);
      else
        setIncompleteEmail(false);

      if(rut == "")
        setIncompleteRut(true);
      else
        setIncompleteRut(false);

      if(region == "")
        setIncompleteRegion(true);
      else
        setIncompleteRegion(false);

      if(comuna == "")
        setIncompleteComuna(true);
      else
        setIncompleteComuna(false);

      if(password == "")
        setIncompletePassword(true);
      else
        setIncompletePassword(false);

      if(confirmPassword == "")
        setIncompleteConfirmPassword(true);
      else
        setIncompleteConfirmPassword(false);

      if(!isChecked)
        setIncompleteChecked(true);
      else
        setIncompleteChecked(false);
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='login-container'>
          <img src="/images/TIMEX 1Color.png" className='img-custom'/>
          <IonList className='error-container'>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Nombre" class="signup-custom" required={true} value={name} onIonChange={(e) => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Email" class="login-custom2" required={true} value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="RUT" class="login-custom2" required={true} value={rut} onIonChange={(e) => setRut(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Region" class="login-custom2" required={true} value={region} onIonChange={(e) => setRegion(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Comuna" class="login-custom2" required={true} value={comuna} onIonChange={(e) => setComuna(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña" class="login-custom2" type="password" required={true} value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput aria-label="Custom input" placeholder="Contraseña Confirmada" class="login-custom2" type="password" required={true} value={confirmPassword} onIonChange={(e) => setConfirmPassword(e.detail.value!)}></IonInput>
            </IonItem>
            {incompleteName && <p className='error-message11'>Por favor, completa este campo</p>}
            {incompleteEmail && <p className='error-message12'>Por favor, completa este campo</p>}
            {incompleteRut && <p className='error-message13'>Por favor, completa este campo</p>}
            {incompleteRegion && <p className='error-message14'>Por favor, completa este campo</p>}
            {incompleteComuna && <p className='error-message15'>Por favor, completa este campo</p>}
            {incompletePassword && <p className='error-message16'>Por favor, completa este campo</p>}
            {incompleteConfirmPassword && <p className='error-message17'>Por favor, completa este campo</p>}
            
          </IonList>
          <div className='checkbox-container'>
            <IonCheckbox labelPlacement="end" className={incompleteChecked ? "checkbox2" : "checkbox1"} checked={isChecked} onIonChange={handleCheckboxChange}>Accepto Terminos y Condiciones</IonCheckbox>
          </div>
          <div style={{ marginRight: '30px', marginLeft: '30px', background: '#879939'}}>
          <IonButton fill="clear" expand="full" className='login-box-container' onClick={handleSignUp}>Crear cuenta</IonButton>
          </div>
          <a href="/login" className='extra-buttons'>Iniciar sesión</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

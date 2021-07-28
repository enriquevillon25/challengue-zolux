import React, { useState, useEffect, useContext } from 'react';

import { Header } from '../../components';
import { TextField, Checkbox, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core'
import './login.view.scss'
import imageIntro from "../../assets/images/image-intro.png";
import { useHistory } from 'react-router-dom';

import { AuthContext, AuthProvider } from '../../contexts/AuthContext';


const Login = () => {
  const history = useHistory();
  const { signIn } = useContext(AuthContext)
  // const [typeDocument, setTypeDocument] = useState<string>('');
  const [doc, setDoc] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [lincesePlate, setLincesePlate] = useState<string>('');
  const [checkBox, setCheckBox] = useState<boolean>(false);


  useEffect(() => {
    console.log(doc)
  }, [doc]);
  
  const typeDocument: string[] = ['DNI','RE'];
  const sendLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const user = {
      doc: doc,
      phone: phone,
      licensePlate: lincesePlate,
      name: 'Enrique',
    }
    signIn(user);
    console.log(doc);
    history.push('/cotizacion')
  }
  return (
    <>
      <Header />
      <div className="container__intro">
        <div className="container__intro--leftbar row">
          <div className="subcontainer__intro">
            <img className="image__intro" src={imageIntro} />
            <div className="box__titles col">
              <span className="title__verysmall gray__color--3 wht--7"> ¡NUEVO!</span>
              <span className="title__medium lh__48"> Seguro <span className="primary__color"> Vehicular Tracking  </span></span>
              <span className="title__xxsmall gray__color--2 lh__24" > Cuentanos donde le haras seguimiento a tu seguro </span>
            </div>
          </div>
        </div>
        <div className="container__intro--info row">
          <div className="subcontainer__form">
            <span className="title__small"> Déjanos tus datos</span>
            <form className="form"   >
              <div className="row">
                {/* <Select className="select__document" options={typeDocument} ></Select> */}
               
                <TextField id="outlined-secondary"
                  label="Numero Documento"
                  variant="outlined"
                  color="secondary"
                  onChange={(e) => { setDoc(e.target.value) }}
                >
                </TextField>
              </div>
              <TextField id="outlined-secondary"
                label="Celular"
                variant="outlined"
                color="secondary"
                onChange={(e) => { setPhone(e.target.value) }}
              >
              </TextField>
              <TextField id="outlined-secondary"
                label="Placa"
                variant="outlined"
                color="secondary"
                onChange={(e) => { setLincesePlate(e.target.value) }}
              >
              </TextField>
              <div className="subcontainer__terms">
                {/* <input type="checkbox" onChange={(e) => { setCheckBox(!checkBox) }}></input> */}
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <span className="title__verysmall">
                  Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                </span>

              </div>
              <button className="button__primary" disabled={!doc || !phone || !lincesePlate} onClick={sendLogin} >
                COTÍZALO
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
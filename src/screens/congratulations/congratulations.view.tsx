import React, { useEffect, useState } from 'react';
import './congratulations.view.scss';
// import imagenCongrats from '../../assets/image-congrats.png'
const Congratulations = () => {
    const [emailUser,setEmailUser] = useState('');

    // const getUser = () => {
    //     axios.get('https://randomuser.me/api').then(response => {

    //         setEmailUser(response.data.results[0].email)
    //     })
    // }

    useEffect(() => {
       
    }, [])

    return (
        <div className="container__quotation">
            <div className="container__quotation--leftbar row">
                {/* <img  className="image__congrats" src={imagenCongrats}/> */}
            </div>
            <div className="container__quotation--info">
                <div className="subcontainer__congrat col">
                    <span className="title__medium primary__color"> ¡Te damos la bienvenida! </span>
                    <span className="title__medium">  Cuenta con nosotros para proteger tu vehículo </span>
                    <span>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: </span>
                    <span> {emailUser}</span>
                    <button className="button__primary"> CÓMO USAR MI SEGURO </button>
                </div>
            </div>
        </div>
    )
}

export default Congratulations;
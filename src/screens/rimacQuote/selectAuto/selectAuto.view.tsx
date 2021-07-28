import React, { useState, useEffect } from 'react';
// import { Header } from '../../components';
import { Header } from '../../../components';
import carImg from '../../../assets/images/car.png';
// import { observer } from "mobx-react"
import { IoIosArrowDropleft } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { TextField, Checkbox, Select, FormControl, MenuItem, InputLabel  } from '@material-ui/core'
import { AuthContext, useAuthContext } from '../../../contexts/AuthContext';

// import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
// import Select from 'react-select';
import './selectAuto.view.scss';

interface RouteParams {
    id: string;
    placa: string;
}
interface Props{
    nextPage: any;
}
const SelectAuto = ({nextPage}:Props) => {  


    const {user} = useAuthContext()
    useEffect(() => {
        // console.log('userxxxxx', user);
        console.log('iiiuseeeeerrrrr', user)
    },[user])
    // console.log(props)
    const MAX: number = 16500;
    const MIN: number = 12500;
    const years: string[] = ['2018','2019','2020','2021'];
    const marca: string[] = ['Wolkswagen', 'Toyota', 'Nissan', 'Hyundai', "Mercedez Benz"];
    const [count, setCount] = useState(14300);
    const params = useParams<RouteParams>();
    const [year, setYear] = useState();
    const [car, setCar] = useState();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();


    const inputYear = (event: any) => {
        setYear(event.value);
    }

    const inputCar = (event: any) => {
        // setCar(event.label);
    }

    const sum = () => {
        if (count < MAX) {
            setCount(count + 100);
        }
    }

    const rest = () => {
        if (count > MIN) {
            setCount(count - 100);
        }
    }
    const handleClick = (value: any) => {
        history.push(`/arma-tu-plan/${params.placa}/${year}/${car}`)
    };
    // const generateSelects = () => {
    //     for (let i = 0; i < 5; i++) {
    //         years.push({ value: 2016 + i, label: (2016 + i).toString() });
    //         cars.push({ value: i, label: marca[i] })
    //     }
    // }

    useEffect(() => {
        // generateSelects();
        // console.log('params', params)
    },[])

    return (
        <>
        {
            (user.user) && <form className="container__quotation--info"   >
                <div className="subcontainer__quotation">
                    <div className="subcontainer__arrowback">
                        <IoIosArrowDropleft className="primary__color titl  e__xlsmall" /> 
                        <span className="gray__color title__verysmall letter__spacing--6"> VOLVER</span>
                    </div>
                    <span className="title__big"> ¡Hola, <span className="primary__color"> Enrique</span> </span>
                    <p className="title__xsmall">Completa los datos de tu auto </p>
                    <div className="subcontainer__uptop">
                        <div className="subcontainer__top">
                      
                        <FormControl >
                        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={marca}
                        onChange={()=>console.log('hola')}
                        >
                            {
                                marca.map(response =>{
                                    return (
                                        <MenuItem value={response}> {response} </MenuItem>
                                    )
                                })
                            }
                        </Select>
                        </FormControl>
                      {/* <Select className="select__document" options={cars} placeholder="Marca" onChange={inputCar} name="model"></Select> */}
                        </div>
                        <div className="help col">
                            <span> AYUDA </span>
                            <hr className="w--100" />
                            <div className="subcontainer-help row space-between">
                                <div className="col space-between" >
                                    <span>¿No encuentras el modelo?</span>
                                    <span className="acian__color--1 point"> CLIC AQUÍ</span>
                                </div>
                                <img src = { carImg } />
                            </div>
                        </div>
                    </div>
                    <div className="subcontainer__down">
                        <div className="subcontainer__gas">
                            <span>¿Tu auto es a gas?</span>
                            <div className="box-radios row">
                                <input type="radio" /> SI
                                <input type="radio" /> NO
                            </div>
                        </div>
                        <hr className="w--100" />
                        <div className="subcontainer__suma">
                            <div className="subcontainer__suma--letter">
                                <span>Indica la suma asegurada</span>
                                <div className="subcontainer__minmax">
                                    <span className="title__verysmall gray__color--2"> MIN $12500</span>
                                    <span className="title__verysmall gray__color--2" > MAX $16500</span>
                                </div>
                            </div>
                            <div className="input__suma title__xsmall">
                                <span className="acian__color--1 point wht--7 title__xlsmall" onClick={rest} > - </span>
                                <span className="gray__color--3"> <span> $ </span>{count} </span>
                                <span className="acian__color--1 point wht--7 title__xlsmall" onClick={sum}> + </span>
                            </div>
                        </div>
                        <button type="submit" className="button__primary " onClick={nextPage}>Continuar</button>
                    </div>
                </div>
            </form>
        }
            
        </>
    )
}

export default SelectAuto;

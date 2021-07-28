import React, { useState, useContext, useEffect } from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SelectAuto from "./selectAuto/selectAuto.view";
import AssemblePlan from "./assemblePlan/assemblePlan.view";
import { Header } from '../../components';
import { AuthContext, useAuthContext } from '../../contexts/AuthContext';

const RimacQuote = () => {
// const {user} = useAuthContext()
    
    // console.log("rimac quote ", user)

    const nextPage = () =>{
        setActiveStep(1);
    }
    // console.log(user);
    useEffect(() => {
        // console.log('userxxxxx', user);
    },)
    const [activeStep, setActiveStep] = useState(0)
    return (
        <>  
            <Header />
            <div className="container__quotation">
                <div className="container__quotation--leftbar">
                    <Stepper activeStep={activeStep} orientation="vertical" style={{ background: 'transparent' }}>
                        <Step>
                            <StepLabel> Datos del auto </StepLabel>

                        </Step>
                        <Step>
                            <StepLabel> Arma tu plan  </StepLabel>
                        </Step>
                    </Stepper>
                </div>

                {
                    (activeStep === 0) && (
                        <>
                            <SelectAuto nextPage={nextPage}></SelectAuto>
                        </>
                    )
                }
                {
                    (activeStep === 1) && (
                        <>
                            <AssemblePlan></AssemblePlan>
                        </>
                    )
                }
            </div>
        </>

    )

}

export default RimacQuote;
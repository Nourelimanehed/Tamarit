import React ,{ useState } from "react";
import Form from "./components/Form";
export const multiStepContexte = React.createContext();
 const StepContext = () =>{
    const[currentStep, setstep]= useState(2);
    const[UserData, setUserData]= useState([]);
    const[finalData, setFinalData]= useState([]);
    function submitData(){}
    return(
        <div>
        <multiStepContexte.Provider value={{currentStep,setstep,UserData,setUserData,finalData,setFinalData}}>
        <Form/> 
        </multiStepContexte.Provider>
        </div>
    )
}
export default StepContext;
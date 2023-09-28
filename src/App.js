import { useEffect, useState } from 'react';
import './App.css';
import {motion} from "framer-motion";
import {StepperContext} from "./contexts/StepperContext";
import FormStepper from './Components/FormStepper';
import Navbar from './Components/Navbar';
import StepperControl from './Components/StepperControl';
import FinalForm from './Components/Steps/FinalForm';
import Form1 from './Components/Steps/Form1';
import Form2 from './Components/Steps/Form2';
import Form3 from './Components/Steps/Form3';
import Form4 from './Components/Steps/Form4';
import Form5 from './Components/Steps/Form5';
import Form6 from './Components/Steps/Form6';
import Form7 from './Components/Steps/Form7';
import Form8 from './Components/Steps/Form8';
import Form9 from './Components/Steps/Form9';
import Form10 from './Components/Steps/Form10';
import Form11 from './Components/Steps/Form11';
import Form12 from './Components/Steps/Form12';

import axios from 'axios';


function App() {

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    "xp":[],
    "c_xp": []
  });
  const [finalData, setFinalData] = useState([]);
  //console.log(currStep);
  const steps = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""

  ];

  // lets make a axios endpoint for updating data
  const api = axios.create({
    baseURL: `https://utc-survey-api.onrender.com/api`
  });
  async function getQuestionSteps () {
    let res = await api.get("/data");
    console.log("HERE IS THE RESPONSE...");
    console.log(res.data)
    return res.data.total_questions;
  }

  useEffect(() => {
    const test = async () => {
      const get_total_q = await getQuestionSteps();
      setTotalQuestions(get_total_q);
    };
    test();
  },[]);

  const displayStep = (step) => {
    switch(step){
      case 1:
        getQuestionSteps()
        steps[0] = "Introduction"
        return <Form1/>
      case 2:
        steps[1] = "Welcome"
        return <Form3/>
      case 3:
        steps[2] = "Age + Email"
        return <Form4/>
      case 4:
        steps[3] = "Future Feelings"
        return <Form2/>
      case 5:
        steps[4] = "Goal Management"
        return <Form5/>
      case 6:
        steps[5] = "Goal Convos"
        return <Form6/>
      case 7:
        steps[6] = "Customized Plan"
        return <Form7/>
      case 8:
        steps[7] = "Importance"
        return <Form8/>
      case 9:
        steps[9] = "Experience"
        return <Form11/>
      case 10:
        steps[8] = "Stressor"
        return <Form10/>
      case 11:
        return <Form9/>
      case 12:
        return <Form12/>
      case 13:
        return <FinalForm/>
      default:
    }
  }

  const handleClick = (direction) =>{
    let newStep = currStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setStep(newStep);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main'>
        <div className='container'>

          {/* STEPPER */}
          <FormStepper steps={steps} currStep={currStep}/>


          {/* DISPLAY FORMS */}
          <div className=' my-1 p-4'>
            <StepperContext.Provider value={{userData,setUserData,finalData,setFinalData}}> 
              {displayStep(currStep)} 
            </StepperContext.Provider>
          </div>


          
          {/* Navigation Control */}
          {currStep !== steps.length && 
          <StepperControl handleClick={handleClick} currentStep={currStep} steps={steps} />
          }
        </div>
      </div>
      
      
    </div>
  );
}

export default App;


import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import Cart from "../Cart/Cart";
import { useState } from "react";

function FormContainer({children}) {
  return (
    <section className="form-container col col-12">
      {children}
    </section>
  );
}

function RegisterContainer({children, phase}) {
  return (
    <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={phase}
    >
      {children}
    </section>
  );
}

export default function Step() {
  const [stepPhase, setStepPhase] = useState(1)
  function handleClick(e){
    if(e.target.className.includes('next')) {
      if(stepPhase === 3) {
        return
      }
      setStepPhase(stepPhase + 1)
    } else if (e.target.className.includes('prev')){
      setStepPhase(stepPhase - 1)
    }
  }
  return (
    <>
      {/* register */}
      <RegisterContainer phase={stepPhase}>
        {/* register-title */}
        <h2 className="register-title col col-12">結帳</h2>
        <StepProgress currentStep={stepPhase}/>
        {/* register-form */}
        <FormContainer>
          {/* address phase */}
          {stepPhase === 1 && <Step1 />}
          {/* shipping phase */}
          {stepPhase === 2 && <Step2 />}
          {/* credit-card phase */}
          {stepPhase === 3 && <Step3 />}
        </FormContainer>
      </RegisterContainer>
      {/* cart */}
      <Cart />
      {/* progress-control */}
      <ProgressControl 
        handleClick={handleClick}
        currentStep={stepPhase}
      />
    </>
  );
}

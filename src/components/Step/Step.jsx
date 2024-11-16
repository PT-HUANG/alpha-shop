import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import Cart from "../Cart/Cart";

function FormContainer({children}) {
  return (
    <section className="form-container col col-12">
      {children}
    </section>
  );
}

function RegisterContainer({children}) {
  return (
    <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={1}
        data-total-price={0}
    >
      {children}
    </section>
  );
}

export default function Step() {
  return (
    <>
      {/* register */}
      <RegisterContainer>
        {/* register-title */}
        <h2 className="register-title col col-12">結帳</h2>
        <StepProgress />
        {/* register-form */}
        <FormContainer>
          {/* address phase */}
          <Step1 />
          {/* shipping phase */}
          <Step2 />
          {/* credit-card phase */}
          <Step3 />
        </FormContainer>
      </RegisterContainer>
      {/* cart */}
      <Cart />
      {/* progress-control */}
      <ProgressControl />
    </>
  );
}

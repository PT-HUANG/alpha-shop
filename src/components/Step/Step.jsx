import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";

export default function Step() {
  return (
    <>
      {/* register */}
      <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={1}
        data-total-price={0}
      >
        {/* register-title */}
        <h2 className="register-title col col-12">結帳</h2>
        <StepProgress />
        {/* register-form */}
        <section className="form-container col col-12">
          <Step1 />
          <Step2 />
          <Step3 />
        </section>
      </section>
      {/* cart */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img
              className="img-container"
              src="./public/images/product-1.jpg"
            />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <object
                    className="product-action minus"
                    data="./public/icons/minus.svg"
                  />
                  <span className="product-count">0</span>
                  <object
                    className="product-action minus"
                    data="./public/icons/plus.svg"
                  />
                </div>
              </div>
              <div className="price">$0</div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={1299}
          >
            <img
              className="img-container"
              src="./public/images/product-2.jpg"
            />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <object
                    className="product-action minus"
                    data="./public/icons/minus.svg"
                  />
                  <span className="product-count">0</span>
                  <object
                    className="product-action minus"
                    data="./public/icons/plus.svg"
                  />
                </div>
              </div>
              <div className="price">$0</div>
            </div>
          </div>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">$0</div>
        </section>
      </section>
      <ProgressControl />
    </>
  );
}

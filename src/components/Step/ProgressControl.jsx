export default function ProgressControl({handleClick, currentStep}) {
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
          <section className="button-group col col-12">
            {currentStep > 1 && 
              <button 
              className="prev"
              onClick={handleClick}
              >
                <object
                  data="./public/icons/left-arrow.svg"
                  className="cursor-point"
                ></object>
                上一步
              </button>
            }
            <button 
              className="next"
              onClick={handleClick}
            >
              {currentStep === 3 ? '確認下單' : '下一步'}
              <object
                data="./public/icons/right-arrow.svg"
                className="cursor-point"
              ></object>
            </button>
          </section>
      </section>
    </>
  );
}

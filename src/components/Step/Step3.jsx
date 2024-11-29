import { useInputChange, useFormData  } from '../../context/SheetContext'

export default function Step3() {
    const handleInputChange = useInputChange()
    const formData = useFormData()
    return (
        <>
        {/* credit-card phase */}
        <form className="col col-12">
          <h3 className="form-title">付款資訊</h3>
          <section className="form-body col col-12">
            <div className="col col-12">
              <div className="input-group input-w-lg-4 input-w-sm-full">
                <div className="input-label">持卡人姓名</div>
                <input 
                  type="text" 
                  name="cardName"
                  value={formData.cardName}
                  placeholder="John Doe" 
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-4 input-w-sm-full">
                <div className="input-label">卡號</div>
                <input 
                  type="text" 
                  name="cardNumber" 
                  value={formData.cardNumber}
                  placeholder="1111 2222 3333 4444" 
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-3 input-w-sm-s3">
                <div className="input-label">有效期限</div>
                <input 
                  type="text" 
                  name="expiryDate" 
                  value={formData.expiryDate}
                  placeholder="MM/YY" 
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group input-w-lg-3 input-w-sm-s3">
                <div className="input-label">CVC / CCV</div>
                <input 
                  type="text" 
                  name="cvc" 
                  value={formData.cvc}
                  placeholder={123} 
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        </form>
        </>
    );
}
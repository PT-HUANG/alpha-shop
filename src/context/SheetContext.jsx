import { useState, createContext, useContext } from 'react';
const FormDataContext = createContext();
const InputChangeContext = createContext();

export function FormDataProvider({children}) {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function resetFormData() {
    setFormData({
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    });
  }

  return(
    <FormDataContext.Provider value={formData}>
      <InputChangeContext.Provider value={{handleInputChange, resetFormData}}>
        {children}
      </InputChangeContext.Provider>
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext)
}

export function useInputChange() {
  return useContext(InputChangeContext).handleInputChange
}

export function useResetFormData() {
  return useContext(InputChangeContext).resetFormData;
}
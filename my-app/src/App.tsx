import React, { useState, useEffect } from 'react';
import { PersonalInfoStep } from './components/PersonalInfo';
import { AddressInfoStep } from './components/AddressInfo';
import { ReviewStep } from './components/Review';
import { FormData } from './type';
import { saveToStorage, getFromStorage, clearStorage } from './components/utils/storage';
import './index.css';

const defaultData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
};

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(defaultData);

  useEffect(() => {
    const saved = getFromStorage();
    if (saved) setFormData(saved);
  }, []);

  useEffect(() => {
    saveToStorage(formData);
  }, [formData]);

  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (): boolean => {
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => s + 1);
    else alert('Please fill all fields are correctly.');
  };

  const backStep = () => setStep((s) => s - 1);
  const submit = () => {
    alert('Form is Submitted Now!');
    clearStorage();
    setFormData(defaultData);
    setStep(0);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <h1 style={{color:'blue', fontSize:'50px'}}>Multi-Step Form</h1>
      <h1 style={{color:'green', fontSize:'30px'}}>Step {step + 1} of 3</h1>

      {step === 0 && <PersonalInfoStep data={formData} onChange={handleChangeInfo} />}
      {step === 1 && <AddressInfoStep data={formData} onChange={handleChangeInfo} />}
      {step === 2 && <ReviewStep data={formData} />}

      <div style={{ marginTop:'50px', marginLeft:'20px' }}>
        {step > 0 && <button className='app' onClick={backStep}>Back</button>}
        {step < 2 && <button className='nxt' onClick={nextStep}>Next</button>}
        {step === 2 && <button  className='submit' onClick={submit}>Submit</button>}
      </div>
    </div>
  );
};

export default App;

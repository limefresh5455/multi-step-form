import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    switch (step) {
        case 1:
            return <StepOne data={formData} handleChange={handleChange} nextStep={nextStep} />;
        case 2:
            return <StepTwo data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <StepThree data={formData} handleChange={handleChange} prevStep={prevStep} />;
        default:
            return <div />;
    }
};

export default MultiStepForm;
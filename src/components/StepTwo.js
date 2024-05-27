import "./style.css"


const StepTwo = ({ data, handleChange, nextStep, prevStep }) => {
    return (
        <div className="commonstyle">
            <h2>Step 2</h2>
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={data.phone || ''}
                onChange={handleChange}
            />

            <label>Email</label>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email || ''}
                onChange={handleChange}
            />

            <label>Zip Code</label>
            <input
                type="pinCode"
                name="pinCode"
                placeholder="PinCode"
                value={data.pinCode || ''}
                onChange={handleChange}
            />

            <label>Landmark</label>
            <input
                type="Landmark"
                name="Landmark"
                placeholder="Landmark"
                value={data.Landmark || ''}
                onChange={handleChange}
            />

            <div className="flex">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default StepTwo;
import "./style.css"


const StepOne = ({ data, handleChange, nextStep }) => {
    return (
        <div className="commonstyle">
            <h2>Step 1</h2>
            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={data.firstName || ''}
                onChange={handleChange}
            />

            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={data.lastName || ''}
                onChange={handleChange}
            />

            <label>Address</label>
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={data.address || ''}
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

            <label>City</label>
            <input
                type="text"
                name="city"
                placeholder="City"
                value={data.city || ''}
                onChange={handleChange}
            />

            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default StepOne;
import "./style.css"


const StepThree = ({ data, handleChange, prevStep }) => {
    return (
        <div className="commonstyle">
            <h2>Step 3</h2>

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

            <label>City</label>
            <input
                type="text"
                name="city"
                placeholder="City"
                value={data.city || ''}
                onChange={handleChange}
            />

            <label>Phone</label>
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={data.phone || ''}
                onChange={handleChange}
            />

            <div className="flex">
                <button onClick={prevStep}>Back</button>
                <button onClick={() => alert('Form submitted')}>Submit</button>
            </div>
        </div>
    );
};


export default StepThree;
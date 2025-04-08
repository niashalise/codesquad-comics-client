function Signup({ user, setUser }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Default prevented.");
        console.log(e.target.firstName.value);
        console.log(e.target.lastName.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    };

    return (
    <main>
        <h2>SIGN UP</h2>
        <br />
        <form onSubmit={handleFormSubmit}>
        <div className="form-fields">
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" required />
                <br />
            </div>
            <div>
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" required />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email address: </label>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <br />
            </div>
            <div>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
                <br />
            </div>
            <div>
                <button type="submit" className="submit-btn">
                Submit</button>
            </div>
        </div>
        </form>
    </main>
    );
}

export default Signup;
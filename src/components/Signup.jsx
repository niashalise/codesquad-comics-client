function Signup() {
    return (
    <main>
        <h2>SIGN UP</h2>
        <br />
        <form>
        <div className="form-fields">
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" />
                <br />
            </div>
            <div>
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email address: </label>
                <input type="email" id="email" name="email" placeholder="Email" />
                <br />
            </div>
            <div>
                <br />
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"/>
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
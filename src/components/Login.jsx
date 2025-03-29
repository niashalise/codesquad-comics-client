function Login() {
    return (
        <main>
            <h2>LOGIN</h2><br />
        <form>
            <div className="form-fields">
                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type="email" id="email"  name="email" placeholder="Email" /><br />
                </div>
                <div>
                    <br /><label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="Password" /><br />
                </div>
                <div><button type="submit" className="submit-btn">Submit</button></div>
            </div>
        </form>
        </main>
    )
}

export default Login;
function Signup() {
  return (
    <main>
      <h2>SIGN UP</h2>
      <form>
        <div className="form-fields">
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email address: </label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Signup;

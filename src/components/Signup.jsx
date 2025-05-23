import { Navigate, useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const body = {
            title: e.target.firstName.value,
            author: e.target.lastName.value,
            publisher: e.target.email.value,
            genre: e.target.password.value,
            // pages: e.target.pages.value,
            // synopsis: e.target.synopsis.value,
            // rating: e.target.rating.value,
        };

        const url = "https://course-project-codesquad-comics-server.onrender.com/signup";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/admin");
        })
        .catch((error) => console.log(error));

        
        // console.log("Default prevented.");
        // console.log(e.target.firstName.value);
        // console.log(e.target.lastName.value);
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
    };

    return (
    <main>
        <h2>SIGN UP</h2>
        <form onSubmit={handleFormSubmit}>
        <div className="form-fields">
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
                <label htmlFor="email">Email address: </label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div>
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </div>
      </form>
    </main>
  );
}

export default Signup;

import { Navigate, useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            synopsis: e.target.synopsis.value,
            rating: e.target.rating.value,
        };

        const url = "https://course-project-codesquad-comics-server.onrender.com/login/local";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/admin")
            })
            .catch(error => console.log(error))
        console.log("Default prevented.");
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return (
        <main>
            <h2>LOGIN</h2><br />
        <form onSubmit={handleFormSubmit}>
            <div className="form-fields">
                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type="email" id="email"  name="email" placeholder="Email" required /><br />
                </div>
                <div>
                    <br /><label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="Password" required /><br />
                </div>
                <div><button type="submit" className="submit-btn">Submit</button></div>
            </div>
        </form>
        </main>
    )
}

export default Login;

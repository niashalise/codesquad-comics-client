import { Navigate, useNavigate } from "react-router-dom";
import styles from '../Login.module.css'

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

        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

        fetch(`${API_BASE_URL}/auth/login/`, {
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
        <main className={styles.main}>
            <div className={styles.loginForm}>
            <h2>LOGIN</h2><br />
        <form onSubmit={handleFormSubmit}>
            <div className={styles.formFields}>
                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type="email" id="email"  name="email" placeholder="Email" required /><br />
                </div>
                <div>
                    <br /><label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="Password" required /><br />
                </div>
                <div><button type="submit" className={styles.submitBtn}>Submit</button></div>
            </div>
        </form>
        </div>
        </main>
    )
}

export default Login;

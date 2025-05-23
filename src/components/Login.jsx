import { useNavigate } from "react-router-dom";
import styles from '../Login.module.css'

function Login({ user, setUser }) {
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
        };

        const url = "https://course-project-codesquad-comics-server.onrender.com/login/local";

            fetch(url, {
                method: "POST",
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                localStorage.setItem("user", JSON.stringify(result.data.user));
                setUser(result.data.user);
                navigate("/admin")
            })
            .catch(error => console.log(error))
    }

    return (
        <main className={styles.main}>
            <div className={styles.loginForm}>
                <h2>LOGIN</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.formFields}>
                        <div>
                            <label htmlFor="email">Email address: </label>
                            <input type="email" id="email"  name="email" placeholder="Email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div><button type="submit" className={styles.submitBtn}>Submit</button></div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;

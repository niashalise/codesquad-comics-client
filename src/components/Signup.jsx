import { Navigate, useNavigate } from "react-router-dom";
import styles from "../Signup.module.css";

function Signup({ user, setUser }) {
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

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/signup";

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

    console.log("Default prevented.");
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.signupForm}>
        <h2>SIGN UP</h2>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formFields}>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div >
              <label htmlFor="email">Email address: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;

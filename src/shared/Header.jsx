import { useNavigate, Link } from "react-router-dom";
import '../App.css'

function Header({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogOut() {
    const url =
      "https://course-project-codesquad-comics-server.onrender.com/logout";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json)
      .then((result) => {
        console.log(result);
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/admin");
      });
  }

  return (
    <header>
      <div className="logo">
        <img
          src="public/images/CodeSquad-Comics-logo.jpg"
          alt="CodeSquad Comics logo"
        />
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            {user.username ? (
              <>
                <li>
                  <Link to="/admin">ADMIN</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogOut}>
                    LOGOUT
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            )}
            <li className="hamburger">
              <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

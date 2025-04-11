function Header({ user, setUser }) {
    return (
        <header>
            <div className="logo">
            <img src="public/images/CodeSquad-Comics-logo.png" alt="CodeSquad Comics logo" />
        </div>
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li className="hamburger"><i className="fa-solid fa-bars"></i></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header;

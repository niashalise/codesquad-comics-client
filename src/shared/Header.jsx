function Header() {
    return (
        <header>
            <div class="logo">
            <img src="public/images/CodeSquad-Comics-logo.png" alt="CodeSquad Comics logo" />
        </div>
        <div class="navbar">
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li class="hamburger"><i class="fa-solid fa-bars"></i></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header;
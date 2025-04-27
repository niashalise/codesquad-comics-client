import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="visit">
        <h3 className="footer-head">VISIT US</h3>
        <p className="footer-text">
          CodeSquad Comics <br />
          123 Dorchester Avenue <br />
          Boston, MA 02124
        </p>
      </div>

      <div className="links">
        <h3 className="footer-head">LINKS</h3>
        <p className="footer-text">
          <a href="#">Home</a>
          <br />
          <a href="#">About</a>
          <br />
          <a href="#">Login</a>
        </p>
      </div>

      <div className="follow">
        <h3 className="footer-head">FOLLOW US</h3>
        <p className="footer-text">
          <a href="#">
            &#8203;<i className="fa-brands fa-facebook"></i>
          </a>
          <br />
          <a href="#">
            &#8203;<i className="fa-brands fa-instagram"></i>
          </a>
          <br />
          <a href="#">
            &#8203;<i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </p>
      </div>

      <div className="codesquad-product">
        <h3 className="footer-head">A PRODUCT OF</h3>
        <img src="public/images/CodeSquad-logo.jpg" alt="CodeSquad logo" />
      </div>
    </footer>
  );
}

export default Footer;

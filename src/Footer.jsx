import "./stylesheets/Footer.css"
function Footer() {
  return (
    <footer className="footer-container">
      <h1 className="footer-copyright">
        Numan &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
}
export default Footer;

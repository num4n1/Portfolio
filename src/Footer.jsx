import "./stylesheets/Footer.css"
function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-copyright">
        Numan &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
export default Footer;

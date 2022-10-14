const Footer = () => {
  return (
    <footer class="footer container">
      <div class="container-of-text-in-footer">
        <h5 class="text-in-footer">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </h5>
      </div>
      <div class="container-of-icons">
        <a class="link" href="https://instagram.com">
          <span class="fa-brands fa-instagram socialmedia-icon"></span>
        </a>
        <a class="link" href="https://facebook.com">
          <span class="fa-brands fa-facebook-square socialmedia-icon"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

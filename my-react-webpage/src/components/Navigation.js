const Navigation = () => {
  return (
    <nav class="navigation container">
      <div class="container-navigation">
        <h1 class="heading-1">moja firma</h1>
        <ul class="container-links">
          <li>
            <a class="link" href="#about-us">
              o nas
            </a>
          </li>
          <li>
            <a class="link" href="#offer">
              oferta
            </a>
          </li>
          <li>
            <a class="disabled link" href="#contact">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

const Expert = () => {
  return (
    <section id="about-us" className="about-us-container">
      <div className="container-experts container">
        <h3 className="main-text-experts">Nasi specjaliści</h3>
        <div className="container-of-circles-and-experts">
          <div className="about-experts">
            <div className="first-circle circle"></div>
            <div className="first-expert expert">
              <p className="name-expert">Imię Nazwisko [ dział ]</p>
              <p className="lorem-expert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
          <div className="about-experts">
            <div className="second-circle circle"></div>
            <div className="second-expert expert">
              <p className="name-expert">Imię Nazwisko [ dział ]</p>
              <p className="lorem-expert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;

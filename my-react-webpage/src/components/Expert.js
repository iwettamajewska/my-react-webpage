import "./ExpertList";

const Expert = ({ index }) => {
  const circleClass =
    index % 2 !== 0 ? "first-circle circle" : "second-circle circle";
  const expertClass =
    index % 2 !== 0 ? "first-expert expert" : "second-expert expert";

  return (
    <div className="about-experts">
      <div className={circleClass}></div>
      <div className={expertClass}>
        <p className="name-expert">Imię Nazwisko [ dział ]</p>
        <p className="lorem-expert">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
          nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
          lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
          tincidunt libero ultrices in.
        </p>
      </div>
    </div>
  );
};

export default Expert;

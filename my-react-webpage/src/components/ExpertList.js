import Expert from "./Expert";

const ExpertList = () => {
  const TwoExperts = [1, 2];

  const ExpertsMap = TwoExperts.map((index) => <Expert key={index} index />);

  return (
    <section id="about-us" className="about-us-container">
      <div className="container-experts container">
        <h3 className="main-text-experts">Nasi specjaliści</h3>
        <div className="container-of-circles-and-experts"></div>
        {ExpertsMap}
      </div>
    </section>
  );
};

export default ExpertList;

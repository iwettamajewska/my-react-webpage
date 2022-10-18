import Box from "./Box";

const RedDotAndText = (
  <>
    <br />
    (nowość)
    <div className="small-circle"></div>
  </>
);

const BoxesList = () => {
  const boxes = [
    {
      name: "Usługa 1",
      isNew: { RedDotAndText },
    },
    {
      name: "Usługa 2",
    },
    {
      name: "Usługa 3",
    },
    {
      name: "Usługa 4",
    },
    {
      name: "Usługa 5",
    },
    {
      name: "Usługa 6",
    },
  ];

  const BoxesMap = boxes.map((box) => <Box key={box.isNew} box={box} />);

  return (
    <section id="offer" className="about-company container">
      <div className="container-of-main-text-about-company">
        <h4 className="main-text-about-company">
          Czym zajmuje się nasza firma?
        </h4>
      </div>
      <div className="container-of-company-boxes">{BoxesMap}</div>
    </section>
  );
};
export default BoxesList;

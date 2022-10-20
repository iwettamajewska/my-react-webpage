import "./BoxesList";

const Box = ({ name, isNew }) => {
  return (
    <div className="box box1">
      {name}
      {isNew}
    </div>
  );
};

// const isNew = () => {
//   <>
//     <br />
//     (nowość)
//     <div className="small-circle"></div>
//   </>;
// };

if (isNew === true) {
  <>
    <br />
    (nowość)
    <div className="small-circle"></div>
  </>;
}

export default Box;

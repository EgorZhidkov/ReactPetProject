import "./result.scoped.scss";

const ResultCalc = (props) => {
  return (
    <>
      <div className="history_row">{props.history}</div>
      <div className="result">{props.result}</div>
    </>
  );
};
export default ResultCalc;

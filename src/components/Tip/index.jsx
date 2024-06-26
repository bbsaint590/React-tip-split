import "./style.css";

const Tip = ({ title, unit, amount }) => {
  return (
    <div className="tip-container">
      <div className="writing">
        <h4>{title}</h4>
      </div>
      <div className="input-container-tip">
        <div className="unit">
          <h5>{unit}</h5>
        </div>
        <div className="amount">
          {amount}
        </div>
      </div>
    </div>
  );
}

export default Tip;

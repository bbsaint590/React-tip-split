import './style.css';

const Amount = ({ tip, input }) => {
  return (
    <div className="amount-container">
      <div className="writing">
        <h3>{tip}</h3>
      </div>
      <div className="input-container">
        {input}
      </div>
    </div>
  );
}

export default Amount;

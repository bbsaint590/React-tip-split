import "./style.css";

const PCbutton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="PCbutton" style={{ backgroundColor: text === 'Custom' ? "#f4f7f8" : "#00474b", color: text === 'Custom' ? "#5a7a79" : "#e6ebec" }}>
      {text}
    </button>
  );
}

export default PCbutton;

import "./style.css"

const ButtonReset = ({ text, handleClick }) => {
    return (
      <button onClick={handleClick} className="button-reset">
        {text}
      </button>
    )
  }

  export default ButtonReset
import './style.css'

const Amount = ({tip, person, input}) => {
    return (
      <div className="amount-container">
        
          <div className="writing">
            <h3>{tip}<br/>
            /person</h3>
            {/* <h4>{person}/person</h4> */}
          </div>
          <div className="input-container">
            {input}
          </div>
        
      </div>
    )
  }

export default Amount


 {/* <div>
          <label className="amount" htmlFor="amount">{input}</label>
          <input className="amount" type="number" name="amount" />
        </div> */}

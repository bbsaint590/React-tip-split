import './App.css';
import React, { useState } from 'react';
import Amount from './components/Amount';
import Heading from './components/Head';
import ButtonReset from './components/ButtonReset';
import Tip from './components/Tip';
import PCbutton from './components/PCbutton';

function App() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const handleReset = () => {
    setBill('');
    setPeople('');
    setTipPercent(0);
    setCustomTip('');
  };

  const handleTipClick = (percent) => {
    setTipPercent(percent);
    setCustomTip('');
  };

  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
    setTipPercent(0);
  };

  const calculateTipAmount = () => {
    const tip = customTip ? parseFloat(customTip) : tipPercent;
    if (!bill || !people || !tip) return '0.00';
    return ((bill * (tip / 100)) / people).toFixed(2);
  };

  const calculateTotalAmount = () => {
    const tip = customTip ? parseFloat(customTip) : tipPercent;
    if (!bill || !people || !tip) return '0.00';
    return ((bill * (1 + tip / 100)) / people).toFixed(2);
  };

  return (
    <>
      <div className='main-cont'>
        <div className='head-cont'>
          <Heading />
        </div>
        <div className='main-box'>
          <div className="left">
            <Tip title="Bill" unit="$" amount={
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            } />
            <div className="middle-section">
              <PCbutton text="5%" handleClick={() => handleTipClick(5)} />
              <PCbutton text="10%" handleClick={() => handleTipClick(10)} />
              <PCbutton text="15%" handleClick={() => handleTipClick(15)} />
            </div>
            <div className="middle-section2">
              <PCbutton text="25%" handleClick={() => handleTipClick(25)} />
              <PCbutton text="50%" handleClick={() => handleTipClick(50)} />
              <input
                type="number"
                value={customTip}
                onChange={handleCustomTipChange}
                placeholder="Custom Tip"
              />
            </div>
            <Tip title="Number of People" unit={<i className="fa-solid fa-person"></i>} amount={
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            } />
          </div>
          <div className="right">
            <Amount tip="Tip Amount" input={`$${calculateTipAmount()}`} />
            <Amount tip="Total" input={`$${calculateTotalAmount()}`} />
            <ButtonReset text="RESET" handleClick={handleReset} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

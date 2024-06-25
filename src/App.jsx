import './App.css'
import Amount from './components/Amount'
import Heading from './components/Head'
import ButtonReset from './components/ButtonReset'
import Tip from './components/Tip'
import PCbutton from './components/PCbutton'


function App() {
  
  const button1Click = () => {
    console.log('button 1 was clicked')
  }
  const button2Click = () => {
    console.log('button 2 was clicked')
  }
  const button3Click = () => {
    console.log('button 3 was clicked')
  }
  const button4Click = () => {
    console.log('button 4 was clicked')
  }
  const button5Click = () => {
    console.log('button 5 was clicked')
  }
  const button6Click = () => {
    console.log('button 6 was clicked')
  }
  const button7Click = () => {
    console.log('button 7 was clicked')
  }

  return (
    <>
    <div className='main-cont'>

     <div className='head-cont'>
      <Heading /> 
     </div>

    <div className='main-box'>

       <div>
        <div className="left">
        <Tip title="Bill" unit="$" amount="0" />
        </div>
        <div className="middle-section">
          <PCbutton text="5%" handleClick={button2Click}/>
          <PCbutton text="10%" handleClick={button3Click}/>
          <PCbutton text="15%" handleClick={button4Click}/>
        <div className="middle-section2">
          <PCbutton text="25%" handleClick={button5Click}/>
          <PCbutton text="50%" handleClick={button6Click}/>
          <PCbutton text="Custom" handleClick={button7Click} />
        </div> 
        </div>
        <div>
        <Tip title="Number of People" unit={<i className="fa-solid fa-person"></i>} amount="0" />
        </div>
       </div>

       <div className="right">
        <Amount tip="Tip Amount" input="$0.00"/>
        <Amount tip="Total" input="$0.00"/>
        <ButtonReset text="RESET" handleClick={button1Click} />
      </div>
      

     </div>



    </div>

    </>
  )
}

export default App

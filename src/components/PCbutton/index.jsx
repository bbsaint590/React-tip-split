import "./style.css"

const PCbutton = ({ text, handleClick }) => {
    if (text === 'Custom') {
      return (
        <button onClick={handleClick} className="PCbutton" style={{ backgroundColor: "#f4f7f8", color: "#5a7a79" }}>
          {text}
        </button>
      )
    } else {
      return (
        <button onClick={handleClick} className="PCbutton" style={{ backgroundColor: "#00474b", color: "#e6ebec" }}>
          {text}
        </button>
      )
    }
  }
  

  export default PCbutton


//   const Stars = ({starSym, category}) => {
//     const totalStars = 5 

//     const starArray =[]
//     for (let i = 0; i < totalStars; i++) {
//         if (i < starSym) {
//             starArray.push(<span><i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i></span>)
//         } else {
//             starArray.push (<span><i className="fa-solid fa-star" style={{color: "grey"}}></i></span>)
//         }
//     }
    
//     return (
//         <>
//         <div>
//             <div>
//                 {starArray}

//             </div>
//             <h2>Rated {starSym} Stars in {category}</h2>

//         </div>
//         </>
//     )
// }

// export default Stars
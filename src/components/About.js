import React from "react";

// let mystyle={
//     color:'white',
//     backgroundColor:'black'
// }

export default function About(props) {
  // const [btnText, setBtnText] = useState("Enable light mode");

  // const [mystyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  //   border: "1px solid white",
  // });

  let mystyle={
    color: props.mode==='dark'?'white':'#241c1c',
    backgroundColor: props.mode==='dark'?'#241c1c':'white'
  }

  // const togglestyle = () => {
  //   if (mystyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid red",
  //     });
  //     setBtnText("Enable dark mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid black",
  //     });
  //     setBtnText("Enable light mode");
  //   }
  // };

  return (
    <div className="container " style={mystyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion my-3" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils give you a way to Analyze your text quickly and efficiently.Be it word count ,character count and many more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils is the free character counter tool that provides instant character count and word count statistics for a given text .Textutils reports the number of words or character .Thus it is suitable for writing word and character limit. 

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
               <strong>Brower Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browser such as Chrome , Firefox , Opera , edge,Internet Explorer, Safari ,etc. It suits to count character in facebook , blog ,excel document , pdf document , essay , etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          onClick={togglestyle}
          type="button"
          class="btn btn-primary my-3"
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
}

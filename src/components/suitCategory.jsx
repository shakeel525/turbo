import * as React from "react";
import "../assets/css/main_style.scss";
function SuitCategory(props) {
  const styleDef = {
    padding: "10px 15px",
    borderRadius: "10px",
  };
  const styleActive = {
    background: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    boxShadow: "9px 9px 7px #00000012",
    
  };
  return (
    <div style={props.select == true ? styleActive : styleDef}>
      <img src={props.imageName}  width="90%"/>
      <h5 style={{margin:"5px"}}>{props.name}</h5>
      <h5 style={{margin:"5px"}}>{props.price}</h5>
    </div>
  );
}
export default SuitCategory;

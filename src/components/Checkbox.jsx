import React from "react";

const Checkbox = ({ isFlexible, setIsFlexible, text }) => {
  return (
    <div className="Checkbox" onClick={()=>setIsFlexible(pre=>pre==0?1:0)}>
      {isFlexible==1 ? (
        <div className={"checkboxContainer true"}>&#x2714;</div>
      ) : (
        <div className={"checkboxContainer "}></div>
      )}
      <label> {text}</label>
      <br></br>
    </div>
  );
};

export default Checkbox;

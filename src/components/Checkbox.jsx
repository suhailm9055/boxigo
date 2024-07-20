import React from "react";

const Checkbox = ({ isFlexible,setIsFlexible, text }) => {
  return (
    <div className="Checkbox">
      <input
        type="checkbox"
        checked={isFlexible}
        onChange={()=>setIsFlexible(pre=>!pre)}
        name={text}
      />
      <label> {text}</label><br></br>
    </div>
  );
};

export default Checkbox;

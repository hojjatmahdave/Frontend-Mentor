import React from "react";
import { NewData } from "../../assets/data/new";
import { NewStyle } from "../../styles/body-style";

const New = () => {
  return (
    <NewStyle>
      <h1>New</h1>
      {NewData.map((items, index) => (
        <div
          key={index}
          style={{
            borderBottom: `${
              items.title === "Is VC Funding Drying Up?"
                ? ""
                : "1px solid #7e7e7e"
            }`,
          }}
        >
          <h2>{items.title}</h2>
          <p>{items.text}</p>
        </div>
      ))}
    </NewStyle>
  );
};

export default New;

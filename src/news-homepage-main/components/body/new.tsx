import React from "react";
import { NewData } from "../../assets/data/new";
import { NewStyle } from "../../styles/body-style";

const New = () => {
  return (
    <NewStyle>
      <h1>New</h1>
      <div>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </NewStyle>
  );
};

export default New;

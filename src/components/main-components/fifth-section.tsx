import React from "react";
import { FifthSectionStyles } from "../../styles/main/fifth-section/fifth-section-style";
import { AppStore, PalyStore, App } from "../../indexs";
export const FifthSection = () => {
  return (
    <FifthSectionStyles>
      <div>
        <img src={App} alt="#" />
        <div>
          <h1>Top-up wherever, whenever</h1>
          <p>
            Get the Ding App for the fastest, easiest way to top-up any phone.
          </p>
          <div>
            <a href="https://www.ding.com/assets/app/logo_appstores_iosappstore_en.svg">
              <img src={AppStore} alt="#" />
            </a>
            <a href="https://www.ding.com/assets/app/logo_appstores_androidgoogleplay_en.svg">
              <img src={PalyStore} alt="#" />
            </a>
          </div>
        </div>
      </div>
    </FifthSectionStyles>
  );
};

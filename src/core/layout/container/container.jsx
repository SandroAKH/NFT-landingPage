import React from "react";
import { Footer, Header, MobileFooter } from "../../../shared";
import { Navigation } from "../navigation/navigation";
import "./container.scss";
import { Infopopup } from "../../../shared";

export const Container = ({ children, curentPage }) => {
  return (
    <div id="container">
      <Infopopup />
      <Header curentPage={curentPage} />
      <main>{children}</main>
      <Footer />
      <MobileFooter />
      <Navigation curentPage={curentPage} />
    </div>
  );
};

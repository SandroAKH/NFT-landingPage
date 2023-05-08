import { useEffect, useState } from "react";
import { Container } from "./core";
import { Roadmap, Homepage, Meta, Faq, Team } from "./feature";
import { Man3D } from "./core";
import loadingGif from "./assets/loading.gif";

import { ParallaxProvider } from "react-scroll-parallax";

import "./styles/app.scss";

const App = () => {
  const [curentPage, setCurrentPage] = useState("homepage");
  const [nextPage, setNextPage] = useState();
  const [position, setPosition] = useState();
  const [scrollTop, setScrollTop] = useState(
    document.documentElement.scrollTop
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };
  }, []);

  useEffect(() => {
    window.onscroll = (e) => {
      const scrollTopNew = document.documentElement.scrollTop;
      const position = scrollTop < scrollTopNew ? "down" : "up";
      setPosition(position);
      setScrollTop(scrollTopNew);

      const curentEl = document.getElementById(curentPage);
      const nextEl =
        position === "down" ? curentEl.nextSibling : curentEl.previousSibling;

      if (nextEl.id !== "man") {
        setNextPage(nextEl.id);
      }

      if (nextEl.offsetTop - scrollTopNew <= 0 && position === "down") {
        if (nextEl.id !== "man") {
          setCurrentPage(nextEl.id);
        }
      } else if (
        curentEl.previousSibling.offsetTop -
          scrollTopNew +
          curentEl.previousSibling.scrollHeight >=
          0 &&
        position === "up"
      ) {
        if (nextEl.id !== "man") {
          setCurrentPage(nextEl.id);
        }
      }
    };
  }, [curentPage, scrollTop, position]);

  return (
    <>
      {loading ? (
        <div className="loading-wrap">
          <img src={loadingGif} />
        </div>
      ) : (
        <Container curentPage={curentPage}>
          <Man3D
            curentPage={curentPage}
            nextPage={nextPage}
            position={position}
          />
          <ParallaxProvider>
            <Homepage />
          </ParallaxProvider>
          <Roadmap />
          <Team />
          <Meta />
          <Faq />
        </Container>
      )}
    </>
  );
};

export default App;

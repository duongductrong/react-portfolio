import React, { useEffect, useRef } from "react";
import Typography from "../../components/Dumb/Typography/Typography";
import Picture from "../../components/Dumb/Picture/Picture";
import { TimelineLite } from "gsap";
import "./Home.scss";

// import AssetPicture from "../../assets/pictures/cicero-engraving.png";
import AssetModel from "../../assets/pictures/model.jpg";
import { useHistory } from "react-router-dom";

function Home() {
  const timelineInstance = new TimelineLite();

  const history = useHistory();
  const nameRef = useRef(null);
  const jobRef = useRef(null);
  const introRef = useRef(null);
  const wishRef = useRef(null);
  const pictureRef = useRef(null);

  useEffect(() => {
    timelineInstance
      .from(pictureRef.current, {
        opacity: 0,
        x: 100,
      })
      .from(jobRef.current, {
        opacity: 0,
        x: 100,
      })
      .from(nameRef.current, {
        x: -100,
        opacity: 0,
      })
      .from(introRef.current, {
        opacity: 0,
      })
      .from(wishRef.current, {
        y: 100,
        opacity: 0,
      });

    return () => {
      timelineInstance.clear();
    };
  }, []);

  const nextAbout = () => {
    timelineInstance
      .reverse()
      .duration(1.5)
      .then(() => {
        history.push("/about");
      });
  };

  return (
    <div className="home-page">
      <div className="home-next-route">
        <Typography onClick={nextAbout} variant="span">
          ▶ Who i am
        </Typography>
      </div>

      <div className="introduce">
        <div className="home-box" ref={pictureRef}>
          <Picture
            className="home-picture"
            src={AssetModel}
            width="100%"
            height="100%"
            alt="Model"
          />
        </div>

        <div ref={jobRef}>
          <Typography
            className="home-text"
            style={{ fontWeight: "normal" }}
            variant="span"
          >
            ﹂ about me.
          </Typography>
        </div>

        <div ref={nameRef}>
          <Typography
            className="home-text"
            style={{ fontWeight: "bold" }}
            variant="h2"
          >
            Hi, I'm Trong,
          </Typography>
        </div>

        <div ref={introRef}>
          <Typography
            className="home-text"
            style={{ fontWeight: "bold" }}
            variant="h3"
          >
            Living in HCM City, a{" "}
            <Typography className="home-text-blue" variant="h3">
              Frontend developer
            </Typography>{" "}
            <br /> currently working
          </Typography>
        </div>

        <div ref={wishRef}>
          <Typography
            className="home-text"
            style={{ fontWeight: "lighter" }}
            variant="h5"
          >
            With the aspiration of becoming a professional frontend & creative
            developer.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;

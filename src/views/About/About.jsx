import React, { useEffect, useRef } from "react";
import { gsap, TimelineLite } from "gsap";
import "./About.scss";
import Typography from "../../components/Dumb/Typography/Typography";
import Separate from "../../components/Dumb/Sepeate/Separate";
import Loading from "../../components/Dumb/Loading/Loading";
import Progress from "../../components/Dumb/Progress/Progress";
import { useHistory } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const timeline = new TimelineLite();
  const aboutRef = useRef(null);
  const history = useHistory();
  const jsRef = useRef(null);
  const reactRef = useRef(null);
  const gsapRef = useRef(null);
  const htmlcssRef = useRef(null);
  const designPatternsRef = useRef(null);
  const teamworkRef = useRef(null);
  const presentationRef = useRef(null);

  useEffect(() => {
    timeline.fromTo(
      aboutRef.current,
      {
        opacity: 0,
        duration: 1,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.to(jsRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: jsRef.current,
      },
      width: "75%",
    });

    gsap.to(reactRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: reactRef.current,
      },
      width: "45%",
    });

    gsap.to(gsapRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: gsapRef.current,
      },
      width: "50%",
    });

    gsap.to(htmlcssRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: htmlcssRef.current,
      },
      width: "70%",
    });

    gsap.to(designPatternsRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: designPatternsRef.current,
      },
      width: "30%",
    });

    gsap.to(teamworkRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: teamworkRef.current,
      },
      width: "50%",
    });

    gsap.to(presentationRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "20px 96%",
        trigger: presentationRef.current,
      },
      width: "50%",
    });
  }, []);

  const nextAbout = () => {
    timeline.reverse().then(() => {
      history.push("/work");
    });
  };

  return (
    <div className="about-me" ref={aboutRef}>
      <Typography className="about-title" variant="h3">
        Who i am?
      </Typography>

      <Typography variant="p" className="about-description">
        Là một sinh viên sắp ra trường, mình có sở thích cũng như mọi người hay
        gọi là đam mê với lập trình, mình bắt đầu tìm hiểu và trau dồi kiến thức
        từ cuối năm 18 tuổi. Thích làm gì đó đẹp mà lại còn theo đuổi ngành lập
        trình, vậy nên mình định hướng làm Frontend Developer. Mong muốn trau
        dồi thêm kiến thức bổ ích về UX/UI để tăng lợi ích sản phẩm mình mang
        lại cho người dùng phía lập trình Frontend.
      </Typography>

      <Typography variant="p" className="about-description">
        Hiện tại, mình đang làm việc với ngôn ngữ JavaScript hướng Frontend với
        các kỹ năng sử dụng VanillaJS, Framework Vue, React và PHP hướng Backend
        (Sử dụng Framework Laravel để xây dựng). Mình có kinh nghiệm sử dụng
        công nghệ JavaScript trên 1 năm và 6 tháng sử dụng Php/Laravel để xây
        dựng Website. Nắm sơ lược các kiến thức nền tảng về Web development để
        đáp ứng nhu cầu xây dựng website của khách hàng. Có khả năng thuyết
        trình cơ bản và kiến thức để làm việc nhóm.
      </Typography>

      <Separate variant="dashed" className="about-separate" />

      <Typography
        className="about-typo"
        variant="h5"
        fontWeight="lighter"
        block
      >
        EDUCATION
      </Typography>

      <div className="row">
        <div className="col-12 col-678-4">
          <Typography variant="span" fontWeight="bold">
            Ton Duc Thang College
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2018 - 2021
          </Typography>
        </div>
        <div className="col-12 col-678-8">
          <Typography variant="p">
            Mình tham gia học công nghệ thông tin tại trường Tôn Đức Tháng vào
            cuối năm 2018, dự định đầu năm 2021 sẽ tốt nghiệp và tiếp tục theo
            con đường trở thành lập trình viên Frontend
          </Typography>
        </div>
      </div>

      <Separate variant="dashed" className="about-separate" />

      <Typography
        className="about-typo"
        variant="h5"
        fontWeight="lighter"
        block
      >
        WORK
      </Typography>

      <div className="row">
        <div className="col-12 col-678-4">
          <Typography variant="span" fontWeight="bold">
            Công ty TMDV dịch vụ Khả kim
          </Typography>
          <Typography variant="span" fontWeight="bolder" block>
            Frontend Developer
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            5/2020 ~ 7/2020
          </Typography>
        </div>
        <div className="col-12 col-678-8">
          <Typography variant="p">
            Bước đầu trong còn đường lập trình, được thực tập tại CÔNG TY CPTM
            DỊCH VỤ KHẢ KIM với vị trí làm Frontend Developer. Được trải nghiệm
            và sử dụng Vue Framework của JavaScript để xây dựng dự án CMS Quản
            trị hệ thống Crawling Data Ecommere
          </Typography>
        </div>

        <div className="col-12 col-678-4">
          <Typography variant="span" fontWeight="bold">
            Công ty TNHH Công Nghệ Anflash
          </Typography>
          <Typography variant="span" fontWeight="bolder" block>
            Web Developer
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            07/2020 - Present
          </Typography>
        </div>
        <div className="col-12 col-678-8">
          <Typography variant="p">
            Tại thời điểm đặt chân vào Công ty Anflash cho đến bây giờ, mình
            tiếp cận được khá nhiều trải nghiệm mới từ lập trình, chuyên môn cho
            đến thái độ làm việc. Được đảm nhiệm công việc lập trình cả về mảng
            Frontend và Backend Developement
          </Typography>
        </div>
      </div>

      <Loading percent={20} text="Twenty year old" />

      <Typography
        className="about-typo"
        variant="h5"
        fontWeight="lighter"
        block
      >
        CODE SKILL
      </Typography>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          JavaScript
        </Typography>
        <Progress reF={jsRef} progress={0} />
      </div>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          React / Vue
        </Typography>
        <Progress reF={reactRef} progress={0} />
      </div>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          Gsap / Animation
        </Typography>
        <Progress reF={gsapRef} progress={0} />
      </div>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          HTML5 / CSS3
        </Typography>
        <Progress reF={htmlcssRef} progress={0} />
      </div>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          Design Patterns
        </Typography>
        <Progress reF={designPatternsRef} progress={0} />
      </div>

      <Typography
        className="about-typo"
        variant="h5"
        fontWeight="lighter"
        block
      >
        SOFT SKILL
      </Typography>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          Teamwork
        </Typography>
        <Progress reF={teamworkRef} progress={0} />
      </div>

      <div className="about-space-bottom">
        <Typography variant="span" fontWeight="lighter" block>
          Presentation
        </Typography>
        <Progress reF={presentationRef} progress={0} />
      </div>

      <Separate variant="dashed" className="about-separate" />

      <div className="about-next-route">
        <Typography onClick={nextAbout} variant="span" block>
          💻 Work
        </Typography>
      </div>
    </div>
  );
}

export default About;

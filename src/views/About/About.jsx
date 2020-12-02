import React from "react";
import "./About.scss";
import Typography from "../../components/Dumb/Typography/Typography";
import Separate from "../../components/Dumb/Sepeate/Separate";

function About() {
  return (
    <div className="about-me">
      <Typography className="about-title" variant="h3">
        Who i am?
      </Typography>

      <Typography variant="p" className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      <Typography variant="p" className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      <Separate variant="dashed" className="about-separate" />

      <Typography
        className="about-education"
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
        className="about-education"
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
    </div>
  );
}

export default About;

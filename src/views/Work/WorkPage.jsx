import React, { useEffect, useState } from "react";
import { gsap, TimelineLite } from "gsap";
import "./WorkPage.scss";

import Typography from "../../components/Dumb/Typography/Typography";
import Separate from "../../components/Dumb/Sepeate/Separate";

function WorkPage() {
  const timeline = new TimelineLite();

  const [data] = useState([
    {
      key: 1,
      title: "XskillStore - Ecommere (Personal)",
      href: "https://reactjs-xskillstore.firebaseapp.com/",
      when: "2019",
      description:
        "Là trang web đầu tiên trong quá trình tự học frontend của mình. Xây dựng đầy đầy đủ các tính năng cơ bản của 1 trang ecommere. Trang các công nghệ React/ExpressJS/Mongodb",
      refTitle: "",
      refDescription: "",
    },

    {
      key: 2,
      title: "Leon blog (Personal)",
      href: "http://leon-sand.firebaseapp.com/",
      when: "2019",
      description:
        "Là trang blog cá nhân được mình xây dựng trong quá trình tự học. Sử dụng công nghệ React/ExpressJS/Mongodb",
      refTitle: "",
      refDescription: "",
    },

    {
      key: 3,
      title: "Xây dựng Frontend CMS crawling data Ecommere (Khả kim)",
      href: "#",
      when: "2020",
      description: `Ở đây mình cùng với một đồng nghiệp khác sử dụng framework VueJS của
        JavaScript để xây dựng giao diện, xử lý dữ liệu từ API và các nghiệp
        vụ liên quan để xây dựng CMS Crawling Data Ecommere - Canawan (Khả
        kim)`,
      refTitle: "",
      refDescription: "",
    },

    {
      key: 4,
      title: "Hạ tầng đô thị (TQDesign)",
      href: "https://hatangdothi.tqdesign.vn/",
      when: "2020",
      description: `Mình đảm nhận dự án cùng với đồng nghiệp xây dựng frontend cho trang
        Hạ tần đô thị (TQDesign)`,
      refTitle: "",
      refDescription: "",
    },

    {
      key: 5,
      title: "Trang phả đồ thế hệ (Private)",
      href: "https://nguyenquang-thaibinh.com/",
      when: "2020",
      description: `Đảm nhận trách nhiệm xây dựng cả frontend và backend cho dự án
      website về phả đồ thế hệ. Sử dụng công nghệ Laravel/Mysql`,
      refTitle: "",
      refDescription: "",
    },
  ]);

  useEffect(() => {
    document.querySelectorAll(".col-12").forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.25 * i,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.25 * i,
        }
      );
    });
  }, []);

  return (
    <div className="works">
      <Typography variant="h3">Works</Typography>
      <Typography
        variant="p"
        fontWeight="lighter"
        block
        style={{ marginBottom: "1rem" }}
      >
        Các dự án cơ bản mà mình đã làm qua trong quá trình hành nghề.
      </Typography>

      <Separate variant="dashed" />

      {data.map((item) => (
        <div key={item.key} className="row">
          <div className="col-12 col-768-4">
            <Typography variant="span" fontWeight="bold">
              <a href={item.href}>{item.title}</a>
            </Typography>
            <Typography variant="span" fontWeight="lighter" block>
              {item.when}
            </Typography>
          </div>
          <div className="col-12 col-768-8">
            <Typography variant="p">{item.description}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkPage;

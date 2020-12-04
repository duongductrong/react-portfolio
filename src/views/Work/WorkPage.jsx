import React from "react";
import "./WorkPage.scss";

import Typography from "../../components/Dumb/Typography/Typography";
import Separate from "../../components/Dumb/Sepeate/Separate";

function WorkPage() {
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

      <div className="row">
        <div className="col-12 col-768-4">
          <Typography variant="span" fontWeight="bold">
            <a href="https://reactjs-xskillstore.firebaseapp.com/">
              XskillStore - Ecommere (Personal)
            </a>
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2019
          </Typography>
        </div>
        <div className="col-12 col-768-8">
          <Typography variant="p">
            Là trang web đầu tiên trong quá trình tự học frontend của mình. Xây
            dựng đầy đầy đủ các tính năng cơ bản của 1 trang ecommere. Trang sử
            các công nghệ React/ExpressJS/Mongodb
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-768-4">
          <Typography variant="span" fontWeight="bold">
            <a href="http://leon-sand.firebaseapp.com/">Leon blog (Personal)</a>
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2019
          </Typography>
        </div>
        <div className="col-12 col-768-8">
          <Typography variant="p">
            Là trang blog cá nhân được mình xây dựng trong quá trình tự học. Sử
            dụng công nghệ React/ExpressJS/Mongodb
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-768-4">
          <Typography variant="span" fontWeight="bold">
            <a href="#">
              Xây dựng giao diện CMS crawling data Ecommere (Khả kim)
            </a>
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2020
          </Typography>
        </div>
        <div className="col-12 col-768-8">
          <Typography variant="p">
            Ở đây mình cùng với một đồng nghiệp khác sử dụng framework VueJS của
            JavaScript để xây dựng giao diện, xử lý dữ liệu từ API và các nghiệp
            vụ liên quan để xây dựng CMS Crawling Data Ecommere - Canawan (Khả
            kim)
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-768-4">
          <Typography variant="span" fontWeight="bold">
            <a href="https://hatangdothi.tqdesign.vn/">
              Hạ tầng đô thị (TQDesign)
            </a>
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2020
          </Typography>
        </div>
        <div className="col-12 col-768-8">
          <Typography variant="p">
            Mình đảm nhận dự án cùng với đồng nghiệp xây dựng frontend cho trang
            Hạ tần đô thị (TQDesign)
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-768-4">
          <Typography variant="span" fontWeight="bold">
            <a href="https://nguyenquang-thaibinh.com/">
              Trang Phả đồ thế hệ (Private)
            </a>
          </Typography>
          <Typography variant="span" fontWeight="lighter" block>
            2020
          </Typography>
        </div>
        <div className="col-12 col-768-8">
          <Typography variant="p">
            Đảm nhận trách nhiệm xây dựng cả frontend và backend cho dự án
            website về phả đồ thế hệ. Sử dụng công nghệ Laravel/Mysql
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;

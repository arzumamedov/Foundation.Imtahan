import React from "react";
import "./OurBlog.scss";
function OurBlog() {
  return (
    <>
      <div className="ourBlog">
        <div className="ourBlogTop">
          <h3>OUR BLOG</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            ab possimus fugiat, autem aliquid, commodi quod voluptatum
            consectetur.
          </p>
        </div>
        <div className="ourBlogBottom">
          <div className="company">
            <img src="https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg" alt="" />
            <h3>How to Invest In Investing Company</h3>
            <div className="spans">
              <span>JANUARY 18, 2019</span>
              <span className="cooper"> BY JAMES COOPER</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
            <p className="started">Get Started</p>
          </div>
          <div className="company">
            <img src="https://preview.colorlib.com/theme/foundation/images/hero_2_no-text.jpg" alt="" />
            <h3>How to Invest In Investing Company</h3>
            <div className="spans">
              <span>JANUARY 18, 2019</span>
              <span className="cooper"> BY JAMES COOPER</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!</p>
            <p className="started">Get Started</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBlog;

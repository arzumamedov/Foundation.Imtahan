import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="footerText">
          <div className="about">
            <h5>ABOUT US</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="features">
            <h5>FEATURES</h5>
            <p>About Us</p>
            <p>Testimonials</p>
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div className="someParagraph">
            <h5>SOME PARAGRAPH</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              nostrum libero iusto dolorum vero atque aliquid.
            </p>
            <h5>SUBSCRIBE TO NEWSLETTER</h5>
            <input type="text" placeholder="Enter Email" />
            <h5>FOLLOW US</h5>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

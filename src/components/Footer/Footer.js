import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerParent">
        <div>
          <h2>Traveling via Delhi, Dehradun or Chandigarh?</h2>
        </div>
        <div>
          <h2>Rent while you transit & save even more!</h2>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginRight: "1.5em" }}> Save upto</h3>
            <h2> 20%</h2>
          </div>
          <div className="knowMoreBtn">Know More</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

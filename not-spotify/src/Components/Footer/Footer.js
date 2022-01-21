import React from "react";
import Logo from "../Core/Logo";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Logo text="Spotify" id="footer__logo" />
      <LinkSection />
    </div>
  );
}

function LinkSection() {
  const COMPANY = {
    sectionName: "Company",
    About: "#",
    Jobs: "#",
    "For the Record": "#",
  };
  const COMMUNITIES = {
    sectionName: "Communities",
    "For Artists": "#",
    Developers: "#",
    Ardvertising: "#",
    Investors: "#",
    Vendors: "#",
  };
  const USEFULLINKS = {
    sectionName: "Useful Links",
    Support: "#",
    "Web Player": "#",
    "Free Mobile App": "#",
  };

  const sectionArr = [COMPANY, COMMUNITIES, USEFULLINKS];

  return (
    <div className="footer__links-section">
      {sectionArr.map((section) => {
        <ul>
          {Object.keys(section).map((item) => (
            <li>
              <Link>{console.log(item)}</Link>
            </li>
          ))}
        </ul>;
      })}
    </div>
  );
}

export default Footer;

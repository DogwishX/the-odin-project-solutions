import React from "react";
import Logo from "../Core/Logo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Logo text="Spotify" id="footer__logo" />
      <LinkSection />
      <Socials />
    </div>
  );
}

function LinkSection() {
  const COMPANY = {
    sectionName: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "For the Record", href: "#" },
    ],
  };
  const COMMUNITIES = {
    sectionName: "Communities",
    links: [
      { name: "For Artists", href: "#" },
      { name: "Developers", href: "#" },
      { name: "Advertising", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Vendors", href: "#" },
    ],
  };
  const USEFULLINKS = {
    sectionName: "Useful Links",
    links: [
      { name: "Support", href: "#" },
      { name: "Web Player", href: "#" },
      { name: "Free Mobile App", href: "#" },
    ],
  };

  const sectionArr = [COMPANY, COMMUNITIES, USEFULLINKS];

  return (
    <div className="links">
      {sectionArr.map((section, index) => (
        <div className="links__section" key={index}>
          <h1 className="links__title">{section.sectionName}</h1>
          <ul className="links__list">
            {section.links.map(({ name, href }, index) => (
              <li className="links__item" key={index}>
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.instagram.com" target="_blank">
        <FontAwesomeIcon className="socials__icon" icon={faInstagram} />
      </a>

      <a href="https://www.twitter.com" target="_blank">
        <FontAwesomeIcon className="socials__icon" icon={faTwitter} />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <FontAwesomeIcon className="socials__icon" icon={faFacebookF} />
      </a>
    </div>
  );
}

export default Footer;

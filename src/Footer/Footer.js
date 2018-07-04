import React, { Component } from 'react';
import logo from "../Images/Icons/D_mark_white.png";
import fb from "../Images/Icons/fb.png";
import twitter from "../Images/Icons/twitter.png";
import linkedin from "../Images/Icons/in.png";
import yt from "../Images/Icons/yt.png";

export default class Footer extends React.Component {

  constructor() {
    super();

  }

  render() {

    let footerLinksArray = [
      {name : "Facebook", img : fb},
      {name : "Twitter", img : twitter},
      {name : "Linkedin", img : linkedin},
      {name : "Youtube", img : yt}
    ]

    let footerLinks = footerLinksArray.map((elem, i) => {
      return (
        <div className="footer-item-row">
          <a href="" className="footer-link">
            <img src={elem.img} className="icon-super-small footer-link-icon" />
            <span className="link-desc">{elem.name}</span>
          </a>
        </div>
      )
    })

    let otherLinksArray = ["Phone", "Chat", "Email", "Integrations", "All Features"]

    let otherLinks = otherLinksArray.map((elem, i) => {
      return (
        <div className="footer-item-row">
          <a href="" className="footer-other-link">
            <span className="link-desc">{elem}</span>
          </a>
        </div>
      )
    })


    return(
      <footer className="footer">
      <div className="container">
        <div className="footer-header-items">
          <div className="footer-header-item">
            <img src={logo} className="icon-big" />
          </div>
          <div className="footer-header-item">
            <h4 id="footer-header-title">PRODUCT</h4>
          </div>
          <div className="footer-header-item">

          </div>
        </div>

        <div className="footer-header-items">
          <div className="footer-header-item">
            {footerLinks}
          </div>
          <div className="footer-header-item">
            {otherLinks}
          </div>
          <div className="footer-header-item footer-newsletter">
            <p id="newsletter-text">Sign up for our newsletter</p>
            <div className="footer-input">
              <input placeholder="Email"></input>
              <button id="footer-newsletter-button">NOTIFY ME</button>
            </div>
            <p id="additional-footer-info">
              For now, this is just to keep up with development & announcements
            </p>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}

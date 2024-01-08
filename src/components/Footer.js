import './Footer.css';
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>

                    <a href="info@acadawriters.com"><img src={process.env.PUBLIC_URL + '/email-icon.png'} alt="Email" /></a>
                    <span id="footer-email">info@acadawriters.com</span>
                    <a href="https://twitter.com"><img src={process.env.PUBLIC_URL + '/tweeter-icon.png'} alt="Tweeter" /></a>
                    <a href="https://youtube.com"><img src={process.env.PUBLIC_URL + '/youtube-icon.png'} alt="YouTube" /></a>
                    <a href="https://linkedin.com"><img src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt="LinkedIn" /></a>
                    <a href="https://facebook.com"><img src={process.env.PUBLIC_URL + '/fb-icon.png'} alt="Facebook" /></a>

                </div >
                <div className="copyright">
                    ©2023 Cimspace. All rights reserved
                </div><div className="terms">
                    Terms and Conditions
                </div>
            </div >
        </div >
    );
}

export default Footer;
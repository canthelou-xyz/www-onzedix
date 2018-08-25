import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => (
    <footer className="main">
    <nav className="secondary">
        <ul>
            <li>
                <i className="fa fa-medium"></i> <OutboundLink href="https://medium.com/@onzedix">Blog</OutboundLink>
            </li>
            <li>
                <i className="fa fa-git"></i> <OutboundLink href="https://github.com/onzedix">Codes</OutboundLink>
            </li>
            <li>
                <i className="fa fa-codepen"></i> <OutboundLink href="https://codepen.io/onzedix/">Pens</OutboundLink>
            </li>
        </ul>
    </nav>
    <nav className="social">
        <OutboundLink href="https://www.facebook.com/studio.developpement.1110/" className="button facebook"><i className="fa fa-facebook"><span>Facebook</span></i>
        </OutboundLink>
        <OutboundLink href="https://twitter.com/jigsaaw" className="button twitter"><i className="fa fa-twitter"><span>Twitter</span></i>
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/pierrecanthelou/" className="button linkedin"><i className="fa fa-linkedin"><span>LinkedIN</span></i>
        </OutboundLink>
        <OutboundLink href="https://www.instagram.com/jigsaaw/" className="button instagram"><i className="fa fa-instagram"><span>Instagram</span></i>
        </OutboundLink>
        </nav>
    <p>copyright &copy; 2018 Pierre&nbsp;Canthelou est micro-entrepreneur - SIRET&nbsp;47835435000025 - <a href="#mentions-legales">Mentions légales</a></p>
</footer>
)
export default Footer;
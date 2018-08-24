import React from "react"
import Img from "gatsby-image"

const SiteInternet = (props) => (
    <section className="siteinternet part leftimg large">
    <a name="realisation-sites-internet" id="realisation-sites-internet"></a>
    <aside>
    <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    </aside>
    <div className="content">
        <h2>Sites internet
            <span>Les compétences pour les projets de sites Internet</span>
        </h2>
        <p>
            Au delà de la réalisation technique, vous trouverez avec moi des
            <strong>
                compétences transversales, des conseils et des bonnes pratiques utiles pour sortir du lot
            </strong> : architecture intelligente, SEO/Référencement, ergonomie, UX Design/centré utilisateur, webdesign,
            iconographie, sémantique, photographie...</p>
        <p>D'un point de vue technique, j'utilise dès que je peux les dernières <strong>technologies viables</strong> sur tous les navigateurs, accorde un intérêt aux <strong>performances</strong> et peux concevoir également <strong>CMS</strong> personnalisé et Intranet...</p>
        <p>
            Je livre alors ce que vous avez demandé PLUS mon expertise, la mise en ligne, l'historique du projet, les sources, la documentation...
        </p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default SiteInternet
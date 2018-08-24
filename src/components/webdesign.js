import React from "react"
import Img from "gatsby-image"

const Webdesign = (props) => (
    <section className="webdesign part rightimg large">
    <a name="web-app-design" id="web-app-design"></a>
    <aside>
    <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    </aside>
    <div className="content">
        <h2>Web/App design
            <span>Le complément graphique</span>
        </h2>
        <p>
            Mes compétences et mon expérience dans le "graphisme" permettent d'exploiter mon expertise de réalisation technique pour
            définir intelligemment des <strong>maquettes/design à destination du web</strong> ou des applications mobiles et des logiciels.
            Je place vos utilisateurs au centre de la réflexion. Après une <strong>collaboration étroite avec votre équipe</strong>, je vous livre des <strong>
                maquettes statiques ou interactives pour
                valider la faisabilité
            </strong>, des écrans complets, des icônes, une charte d'exploitation pour les intégrateurs...
        </p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default Webdesign
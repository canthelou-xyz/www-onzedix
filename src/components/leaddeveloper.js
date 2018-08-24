import React from "react"
import Img from "gatsby-image"

const LeadDeveloper = (props) => (
    <section className="chefprojetdigital part leftimg">
    <a name="lead-developpeur" id="lead-developpeur"></a>
    <aside>
        <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    </aside>
    <div className="content">
        <h2>Lead Developper
            <span>Le métier de guide en développement logiciel...</span>
        </h2>
        <p>
            Un acteur indépendant et à la carte qui sera un intermédiaire neutre pour <strong>trouver des réponses à toutes vos questions techniques</strong>
            portant sur la création d'un site web, d'une application mobile, et en général de projets digitaux.
        </p>
        <p>Je livre un CDC, un livre blanc, un budget, un planning, une liste de compétences nécessaires.</p>
        <p>Après avoir <strong>mis en place les bases de votre projet</strong>, les fondations du code logiciel, vous pourrez choisir le(s) prestataire(s) qui saura(ont) construire le projet en suivant cette base et mes prérogatives et me laisser <strong>gérer&nbsp;l'équipe</strong>.</p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default LeadDeveloper
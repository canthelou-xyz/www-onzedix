import React from "react"
import Img from "gatsby-image"

const Intro = (props) => (
    <section className="intro part long">
    <a name="intro" id="intro"></a>
    <aside>
    <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    </aside>
    <div className="content">
        <h2>Introduction
            <span>Qui et pour quoi ?</span>
        </h2>
        <p>
            Ingénieur en génie logiciel, je participe à l'élaboration de divers
            <strong>projets numériques, mobiles et web depuis 2004</strong>. Etude, ergonomie, design, intégration, développement,
            mise en ligne et marketing digital, ce sont les compétences que je développe depuis plus de 10 ans, seul ou avec
            des partenaires, pour des clients locaux, régionaux et nationaux…
        </p>
        <p>En
            <strong>Septembre 2018</strong>, j'intègre l'équipe de Bee2link en qualité de
            <strong>lead developer chargé du développement logiciel</strong> d'un de leurs projet...</p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default Intro

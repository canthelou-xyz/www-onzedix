import React from "react"
import Img from "gatsby-image"

const IngenierieLogicielle = (props) => (
    <section className="ingenierielogicielle part rightimg high">
    <a name="ingenierie-logicielle" id="ingenierie-logicielle"></a>
    <aside>
    <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    </aside>
    <div className="content">
        <h2>Ingénierie logicielle
            <span>Une aide considérable pour vos projets</span>
        </h2>
        <p>
            Vous avez un CDC pour un projet d'<strong>application mobile métier</strong> ou pour les stores iOS/Android, une application web, un logiciel
            métier pour Windows ou Mac, et <strong>vous&nbsp;recherchez un réalisateur force de propositions et expérimenté</strong>.
        </p>
        <p>
            Je vous livre les recommandations UX et ergonomiques, des produits intermédiaires, le produit fini, l'historique du projet,
            les sources, les bonnes pratiques de distribution et de mise en ligne, la documentation éventuelle.
        </p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default IngenierieLogicielle
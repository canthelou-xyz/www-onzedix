import React from "react"

const AvecQuoi = () => (
    <section className="avecquoi part rightimg large">
    <a name="avec-quoi" id="avec-quoi"></a>
    <aside>
        <img src={require('../../public/static/avecquoi.jpg')} title="" />
    </aside>
    <div className="content">
        <h2>Avec quoi ?
            <span>Les outils et les techniques utilisées pour les projets</span>
        </h2>
        <p><strong>Cordova, Vue.js, ReactNative, Javascript</strong> et de multiples plugins permettent de réaliser des applications poussées
            tirant partie du potentiel d'un téléphone ou d'une tablette : notifications push, carnet d'adresses, giroscope,
            GPS, caméra, ...
        </p>
        <p>Les applications développées <strong>utilisent les technologies web</strong> permettant entre autres choses de mutualiser le développement
            pour la plateforme <strong>iOS d'Apple ou Android de Google</strong>.</p>
        <p>Les sites et les Intranets peuvent être réalisés avec les <strong>technologies universelles</strong> (HTML,&nbsp;CSS,&nbsp;Javascript) appuyés par des serveurs utilisant soit <strong>PHP soit Node.js</strong>.</p>
        <footer>
            <a href="#menu">menu</a>
        </footer>
    </div>
</section>
)

export default AvecQuoi
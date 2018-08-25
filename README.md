# README #

Pierre Canthelou Ingénieur en génie logiciel, site personnel et portfolio

### TODO ###

* Installer les outils Google et tester le SEO
* Clic sur une entrée du menu descend doucement en animation
* Clic sur "Menu" remonte doucement en animation
* Coder le lazyload des images et leur apparition selon le scroll _nativement si existe_
* Coder l'apparition des mentions légales en popin _nativement si existe_
* Coder l'apparition d'un formulaire de contact en popin _nativement si existe_
* Ajouter et coder le mode PWA
* Faire tous les icones d'installation du mode PWA
* Tester les performances

### GATSBY ###

1.  ** Templates **
    
    https://github.com/gatsbyjs/gatsby-starter-default
    
    https://github.com/gatsbyjs/gatsby-starter-blog

    https://github.com/Vagr9K/gatsby-advanced-starter

    https://github.com/haysclark/gatsby-starter-casper

    https://github.com/v4iv/gatsby-starter-business

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter
    ```

3.  **Start developing.**

    Navigate into your new site?s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

5.  **Transform .kit and sass to React components!**


### IMAGES RESPONSIVES ###

1. ** Setup **

    ```json
    plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
    ],
    ```

    ```js
    export const query = graphql`
    query IntroImageQuery {
        avecquoiImage: imageSharp(id: { regex: "/avecquoi/" }) {  
        sizes(quality:90) {
            ...GatsbyImageSharpSizes_noBase64
        }
        }

    ...

    <Intro img={data.introImage}></Intro>
    ```

2. ** Usage **

    ```js
    import Img from "gatsby-image"

    const Intro = (props) => (
        <section className="intro part long">
        <a name="intro" id="intro"></a>
        <aside>
        <Img sizes={props.img.sizes} style={{ height:`100%`, display:`block` }} imgStyle={{ height:`100%`, width:`auto`, left:`50%`, transform:`translateX(-50%)` }} title="" />
    ```

### INSTALLER GOOGLE ANALYTICS & HOTJAR ###

```sh
npm install --save gatsby-plugin-google-analytics
```
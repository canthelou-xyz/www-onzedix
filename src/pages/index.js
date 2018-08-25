import React from 'react'

import Intro from "../components/intro"
import LeadDeveloper from "../components/leaddeveloper"
import IngenierieLogicielle from "../components/ingenierielogicielle"
import SiteInternet from "../components/siteinternet"
import Webdesign from "../components/webdesign"
import PourFaireQuoi from "../components/pourfairequoi"
import AvecQuoi from "../components/avecquoi"
import Bio from "../components/bio"
import Contact from "../components/contact"

export const query = graphql`
  query IntroImageQuery {
    avecquoiImage: imageSharp(id: { regex: "/avecquoi/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    bioImage: imageSharp(id: { regex: "/bio/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    fairequoiImage: imageSharp(id: { regex: "/fairequoi/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    introImage: imageSharp(id: { regex: "/head/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    ingenierieImage: imageSharp(id: { regex: "/inge/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    leadImage: imageSharp(id: { regex: "/lead/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    siteImage: imageSharp(id: { regex: "/site/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    webappImage: imageSharp(id: { regex: "/webapp/" }) {  
      sizes(quality:90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`

const IndexPage = ({data}) => (
  <div>
    <Intro img={data.introImage}></Intro>
    <LeadDeveloper img={data.leadImage}></LeadDeveloper>
    <IngenierieLogicielle img={data.ingenierieImage}></IngenierieLogicielle>
    <SiteInternet img={data.siteImage}></SiteInternet>
    <Webdesign img={data.webappImage}></Webdesign>
    <PourFaireQuoi img={data.fairequoiImage}></PourFaireQuoi>
    <AvecQuoi img={data.avecquoiImage}></AvecQuoi>
    {/* <Portfolio></Portfolio> */}
    <Bio img={data.bioImage}></Bio>
    <Contact></Contact>
  </div>
)

export default IndexPage
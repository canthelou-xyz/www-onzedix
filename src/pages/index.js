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
import MentionsLegales from "../components/mentionslegales"

const IndexPage = () => (
  <div>
    <Intro></Intro>
    <LeadDeveloper></LeadDeveloper>
    <IngenierieLogicielle></IngenierieLogicielle>
    <SiteInternet></SiteInternet>
    <Webdesign></Webdesign>
    <PourFaireQuoi></PourFaireQuoi>
    <AvecQuoi></AvecQuoi>
    {/* <Portfolio></Portfolio> */}
    <Bio></Bio>
    <Contact></Contact>
    {/* <MentionsLegales></MentionsLegales> */}
  </div>
)

export default IndexPage

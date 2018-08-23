import React from 'react'

const Header = ({ siteTitle }) => (
<header className="main"><a name="menu" id="menu"></a>
  <h1>Pierre Canthelou
        <br/>
        <small>Lead developper chez Bee2link, ingénierie logicielle, applications mobiles, web app et sites internet</small>
  </h1>
  <nav>
        <ul>
              <li>
                    <a href="#lead-developpeur">Un lead développeur ?</a>
              </li>
              <li>
                    <a href="#pour-faire-quoi">Pour faire quoi ?</a>
              </li>
              <li>
                    <a href="#avec-quoi">Avec quoi ?</a>
              </li>
              <li>
                    <a href="#projets-sites-applications-internet">Qui a déjà fait ?</a>
              </li>
        </ul>
  </nav>
</header>
)

export default Header

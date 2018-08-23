import React from "react"

class Contact extends React.Component {
    render() {
        return (
            <section className="contact part">
                <a name="contact" id="contact"></a>
                <aside><div className="mapwrapper">
                <iframe width="100%" height="200" src="https://maps.google.com/maps?width=100%&amp;height=200&amp;hl=en&amp;q=Cercot%2C%2071390%20Moroges+(Pierre%20est%20ici%20!)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div></aside>
                <div className="content">
                    <h2>Contactez-moi
                        <span>{ ("rf.xidezno@erreip".split("").reverse().join("")) }</span>
                    </h2>
                    <p>De vive voix, demandez Pierre&nbsp;Canthelou au&nbsp;
                        <strong>06&nbsp;95&nbsp;14&nbsp;49&nbsp;42</strong>
                    </p>
                    <footer>
                        <a href="#menu">menu</a>
                    </footer>
                </div>
            </section>
        )
    }
}

export default Contact
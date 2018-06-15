import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Ilakiya Mini Party Hall Venue Capacity</title>
            <meta name="description" content="Ilakiya Mini Party Hall" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Venue Capacity</h1>
                    </header>
                    <h3>Party Hall 1</h3>
                    <p>Theater Style - 100px</p>
                    <p>Floating - 125px</p>
                    <h3>Party Hall 2</h3>
                    <p>Theater Style - 200px</p>
                    <p>Floating - 300px</p>


                </div>
            </section>
        </div>

    </div>
)

export default Generic
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Ilakiya Mini Party Hall Contact Detail</title>
            <meta name="description" content="No.1, Sarojini St, Postal Colony, Parthasarathi Puram, T Nagar, Chennai 600017" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact Us</h1>
                    </header>
                    <p>No.1, Sarojini St, Postal Colony, Parthasarathi Puram, T Nagar, Chennai 600017</p>
                    <p>+91 44 11111111</p>

                    </div>
            </section>
        </div>

    </div>
)

export default Generic
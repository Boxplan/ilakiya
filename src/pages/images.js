import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import pic20 from '../assets/images/pic20.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'
import pic23 from '../assets/images/pic23.jpg'


const Generic = (props) => (
    <div>
        <Helmet>
            <title>Ilakiya Mini Party Hall</title>
            <meta name="description" content="Ilakiya Mini Party Hall Image gallery" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Image Gallery</h1>
                    </header>
                    <h3>Party Hall</h3>
                    <span className="image main"><img src={pic20} alt="" /></span>
                    <span className="image main"><img src={pic21} alt="" /></span>
                    <span className="image main"><img src={pic22} alt="" /></span>
                    <span className="image main"><img src={pic23} alt="" /></span>
                </div>
            </section>
        </div>

    </div>
)

export default Generic
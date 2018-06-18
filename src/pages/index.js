import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import ScriptHolder from '../components/ScriptHolder'

class HomeIndex extends React.Component {

    constructor(props) {
            super(props);
            this.state ={};
            this.hideDom = this.hideDom.bind(this)
        }



    hideDom(){
      //  document.getElementById("one").style.display ="none";
    }


    render() {
       // const siteTitle = this.props.data.site.siteMetadata.title;
       // const siteDescription = this.props.data.site.siteMetadata.description;
      //  const wWidth = window.innerWidth;
      //  const wHeight = window.innerHeight;

        const schemaOrgJsonLd =
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "@id": "http://www.venueplan.com",
            "name": "Ilakiya Mini Party Hall",
            "image": ["https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Ilakiya-Mini-20160626_083326.jpg"],
            "address": {
            "@type": "PostalAddress",
                "streetAddress": "No.1, Sarojini St, Postal Colony, Parthasarathi Puram, T Nagar, Chennai",
                "addressLocality": "T Nagar",
                "addressRegion": "Chennai",
                "postalCode": "600017",
                "addressCountry": "India"
        },
            "aggregateRating": {
            "@type": "AggregateRating",
                "ratingValue": " 4.5 ",
                "bestRating": "5",
                "reviewCount": " 48 "
        },
            "priceRange": "Rs.10000 - Rs.20000",
            "geo": {
            "@type": "GeoCoordinates",
                "latitude": 13.036613,
                "longitude": 80.233776
        },
            "url": "http://www.venueplan.com",
            "telephone": " +918123222322",

            "potentialAction": {
            "@type": "ReserveAction",
                "target": {
                "@type": "EntryPoint",
                    "urlTemplate": "http://www.venueplan.com",
                    "inLanguage": "en-US",
                    "actionPlatform": "http://schema.org/DesktopWebPlatform"


            },
            "result": {
                "@type": "Reservation",
                    "name": "Get Quote"
            }
        }
        };


        return (
            <div>
                <Helmet>
                    <title>Ilakiya Mini Party Hall</title>
                    <meta name="description" content='Ilakiya Mini Party Hall is located at T.Nagar, Chennai ' />
                    <script type="application/ld+json">
                        {JSON.stringify(schemaOrgJsonLd)}
                    </script>
                </Helmet>

                <div id="main" >
                    <section className="tiles">
                        <article>
                            <header className="major">
                                <h3>Ilakiya Mini Party Hall</h3>
                                <p>Ilakiya Mini Party Hall</p>

                            </header>
                            <Link to="/venues" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Ilakiya-Mini-20160626_083326.jpg)`}}>
                            <header className="major">
                                <h3>Packages</h3>
                                <p>4 | 8 Hour Rental Package Available</p>

                            </header>
                            <Link to="/packages" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Ilakiya-Mini-20160626_083521.jpg)`}}>
                            <header className="major">
                                <h3>Capacity Info</h3>
                                <p>Ilakiya Mini Party Hall has 2 halls which can accommodate from 100 to 300 Guests</p>
                            </header>
                            <Link to="/capacity" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Ilakiya-Mini-2014-01-2416.02.20.jpg`}}>
                            <header className="major">
                                <h3>Gallery</h3>
                                <p>Images gallery</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(jpeg`}}>
                            <header className="major">
                                <h3>Recent Events</h3>
                                <p>Birthday Parties, Family Events, Parties</p>
                            </header>
                            <Link to="/recent-events" className="link primary"></Link>
                        </article>

                        <article>
                            <header className="major">
                                <h3>+91 44 11111111</h3>
                                <p>Address | Location</p>
                            </header>
                            <Link to="/contact-us" className="link primary"></Link>
                        </article>

                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`


//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Balan-Farm-Green-Convention-Hall-balan-farm3-1.jpg)`}}>
// <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Horizon-Horizon_Octave_JP_Nagar_3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
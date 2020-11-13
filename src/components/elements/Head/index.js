import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title, description, image }) =>
    <Helmet>
        <html lang="en" amp />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
<<<<<<< HEAD
        <meta property="og:image" content="/images/poncho.png" />
=======
        <meta property="og:image" content="../../../assets/favicon.png" />
>>>>>>> 054a627a96a4eeb7976c3056539307a82a32ad90
        {/*<meta name="google-site-verification" content="w6QODQIo6PYp7OLUH3RI1ULc4NKzA0lt7tzXEeKJzjM" />*/}
        <link rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                  integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
                  crossOrigin="anonymous" />
    </Helmet>

export default Head

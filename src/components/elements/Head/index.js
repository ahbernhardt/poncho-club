import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title, description, image }) =>
    <Helmet>
        <html lang="en" amp />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content="./src/assets/favicon.png" />
        {/*<meta name="google-site-verification" content="w6QODQIo6PYp7OLUH3RI1ULc4NKzA0lt7tzXEeKJzjM" />*/}
        <link rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                  integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
                  crossOrigin="anonymous" />
    </Helmet>

export default Head

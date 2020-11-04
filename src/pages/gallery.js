import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import GalleryContent from'../components/GalleryPage/Content'


const galleryQuery = graphql`
  query GalleryQuery {
      images: allGalleryJson {
       edges {
         image: nodes {
            id
            image {
               publicURL
               childImageSharp {
                 fluid {
                    ...GatsbyImageSharpFluid
                 }
               }
            }
         }
       }
  }
`

export default ({location}) =>

    <StaticQuery
        query= {galleryQuery}
        render= {data =>
            <Layout location={location}>
                <GalleryContent data={data} />
            </Layout>
        }
    />


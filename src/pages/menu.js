import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import MenuContent from '../components/MenuPage/Content'

const menuQuery = graphql`
  query MenuQuery {
  
    foods: allFoodsJson {
      edges {
        food: node {
          name
          recommended
          description
        }
      }
    }
    
    snacks: allSnacksJson {
      edges {
        snack: node {
          name
          recommended
          description
        }
      }
    }
    
    beers: allBeersJson {
      edges {
        beer: node {
          name
          company
          description
        }
      }
    }
    
    gins: allGinsJson {
      edges {
        gin: node {
          name
          company
          description
        }
      }
    }
    
    rums: allRumsJson {
      edges {
        rum: node {
          name
          company
          description
        }
      }
    }
    
    vodkas: allVodkasJson {
      edges {
        vodka: node {
          name
          company
          description
        }
      }
    }
    
  }
`
export default ({ location }) =>
    <StaticQuery
        query= {menuQuery}
        render= {data =>
            <Layout location={location}>
                <MenuContent data={data} />
            </Layout>
        }
    />

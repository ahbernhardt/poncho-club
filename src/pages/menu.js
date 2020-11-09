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
          price
          description
        }
      }
    }
    
    desserts: allDessertsJson {
      edges {
        dessert: node {
          name
          price
          description
        }
      }
    }
    
    alcoholics: allAlcoholicsJson {
      edges {
        alcoholic: node {
          name
          price
          description
        }
      }
    }
    
    nonAlcoholics: allNonAlcoholicsJson {
      edges {
        nonAlcoholic: node {
          name
          price
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

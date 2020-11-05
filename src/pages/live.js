import React from 'react'
import Layout from '../components/layout'
import StreamContent from '../components/LivePage'
// import {graphql} from "gatsby";
// const liveQuery = graphql`
//   query LiveQuery {
//       edges {
//         staff: node {
//           name,
//           position,
//           description,
//           current,
//           image {
//             src
//           }
//         }
//       }
//       }
//
//   }

// `

export default ({ location }) =>
    <Layout location={location}>
        <StreamContent />
    </Layout>

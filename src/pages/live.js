import React from 'react'
// import ReactLivestream from "react-livestream";
import Layout from '../components/layout'
import StreamContent from '../components/LivePage'

export default ({ location }) =>
    <Layout location={location}>
        <StreamContent />
    </Layout>

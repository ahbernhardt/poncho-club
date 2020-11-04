import React from 'react'
import Layout from '../components/layout'
import StreamContent from '../components/StreamingPage'

export default ({ location }) =>
    <Layout location={location}>
        <StreamContent />
    </Layout>

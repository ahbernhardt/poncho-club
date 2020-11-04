import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/Welcome/Intro'
import Head from '../components/elements/Head'
import WelcomeMiddle from '../components/Welcome/Welcome'
import { META } from '../utils/constants'

export default ({ location }) =>
    <Layout location={location}>
      <section>
        <Head
            {...META.index}
            image={META.common.image}
        />
        <WelcomeMiddle />
        <Intro fixed={true} />

      </section>
    </Layout>

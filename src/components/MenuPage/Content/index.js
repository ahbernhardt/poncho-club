import React from 'react'
import Head from '../../elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import MenuIntroSection from '../IntroSection'
import GroupListItem from '../GroupListItem'
import GroupList from '../List'
import { MenuSection } from './style'


export default ({ data }) => {
    const { beers, gins, rums, vodkas } = data
    return (
        <ContentWrapper>
            <Head
                {...META.menu}
                image={META.common.image}
            />

            <MenuIntroSection
                content={() =>
                    <>
                        Check out Our Menu
                    </>
                }
            />

            <MenuSection>
                {/* BEER */}
                {beers.edges.length > 0 &&
                <GroupList
                    title='Beer'
                    list={() => beers.edges.map(({ beer }, i) => (
                        <GroupListItem
                            key={i}
                            {...beer}
                        />
                    ))}
                />}

                {/* GIN */}
                {gins.edges.length > 0 &&
                <GroupList
                    title='Gin'
                    list={() => gins.edges.map(({ gin }, i) => (
                        <GroupListItem
                            key={i}
                            {...gin}
                        />
                    ))}
                />}

                {/* RUM */}
                {rums.edges.length > 0 &&
                <GroupList
                    title='Rum'
                    list={() => rums.edges.map(({ rum }, i) => (
                        <GroupListItem
                            key={i}
                            {...rum}
                        />
                    ))}
                />}

                {/* VODKA*/}
                {vodkas.edges.length > 0 &&
                <GroupList
                    title='Vodka'
                    list={() => vodkas.edges.map(({ vodka }, i) => (
                        <GroupListItem
                            key={i}
                            {...vodka}
                        />
                    ))}
                />}
            </MenuSection>
        </ContentWrapper>
    )
}

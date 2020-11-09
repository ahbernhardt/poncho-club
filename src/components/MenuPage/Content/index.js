import React from 'react'
import Head from '../../elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import MenuIntroSection from '../IntroSection'
import GroupListItem from '../GroupListItem'
import GroupList from '../List'
import { MenuSection, Title } from './style'



export default ({ data }) => {
    const { foods, desserts, alcoholics, nonAlcoholics } = data
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
                <Title>
                    <span className="name">Food</span>
                </Title>
            </MenuSection>

            <MenuSection>
                {/* Food */}
                {foods.edges.length > 0 &&
                <GroupList
                    title='Foods'
                    list={() => foods.edges.map(({ food }, i) => (
                        <GroupListItem
                            key={i}
                            {...food}
                        />
                    ))}
                />}

                {/* DESSERT */}
                {desserts.edges.length > 0 &&
                <GroupList
                    title='Desserts'
                    list={() => desserts.edges.map(({ dessert }, i) => (
                        <GroupListItem
                            key={i}
                            {...dessert}
                        />
                    ))}
                />}
            </MenuSection>
            <br />
            <br />
            <MenuSection>
                <Title>
                    <span className="name">Drinks</span>
                </Title>
            </MenuSection>

            <MenuSection>
                {/* ALCOHOLIC */}
                {alcoholics.edges.length > 0 &&
                <GroupList
                    title='Alcoholic'
                    list={() => alcoholics.edges.map(({ alcoholic }, i) => (
                        <GroupListItem
                            key={i}
                            {...alcoholic}
                        />
                    ))}
                />}

                {/* NON-ALCOHOLIC */}
                {nonAlcoholics.edges.length > 0 &&
                <GroupList
                    title='Non-Alcoholic'
                    list={() => nonAlcoholics.edges.map(({ nonAlcoholic }, i) => (
                        <GroupListItem
                            key={i}
                            {...nonAlcoholic}
                        />
                    ))}
                />}
            </MenuSection>
        </ContentWrapper>
    )
}

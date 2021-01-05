import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Head from '../../components/Head'
import Layout from '../../components/Layout'

export const BasicLink = styled(Link)`
    text-decoration: none;
    color: #232129;

    transition: all 200ms ease;

    &:hover {
        color: rebeccapurple;
    }
`

const LocationsPage = ({ data }) => {
    return (
        <Layout>
            <Head title="Locations" />
            <h1>Locations Page</h1>
            <ul>
                {data.allContentfulLocation.nodes.map((location) => {
                    return (
                        <li key={location.id}>
                            <BasicLink to={location.slug}>
                                {location.title}
                            </BasicLink>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export const pageQuery = graphql`
    query LocationQuery {
        allContentfulLocation {
            nodes {
                title
                slug
                id
            }
        }
}`

export default LocationsPage
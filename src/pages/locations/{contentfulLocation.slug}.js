import { graphql, Link } from 'gatsby'
import React from 'react'
import { BasicLink } from '.'
import Head from '../../components/Head'
import Layout from '../../components/Layout'

const LocationPage = ({ data }) => {
  return (
    <Layout>
      <Head title={`${data.contentfulLocation.title} Office`} />
      <h1>{data.contentfulLocation.title}</h1>

      <BasicLink to="/locations">Back to all locations</BasicLink>
    </Layout>
  )
}

export const pageQuery = graphql`
query SingleLocationQuery($id: String) {
  contentfulLocation(id: {eq: $id}) {
    id
    title
    slug
  }
}
`

export default LocationPage
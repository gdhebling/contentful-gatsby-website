import { graphql } from 'gatsby'
import React from 'react'
import { BasicLink } from '.'
import Head from '../../components/Head'
import Layout from '../../components/Layout'

const LocationPage = ({ data }) => {
  return (
    <Layout>
      <Head title={`${data.contentfulLocation.title} Office`} />
      <h1>{data.contentfulLocation.title}</h1>
      <p>Welcome to our {data.contentfulLocation.title} office.</p>
      <img src={`http:${data.contentfulLocation.locationImage.fluid.src}`} alt="" />
      {console.log(data.contentfulLocation.locationImage)}

      <p>
        <BasicLink to="/locations">Back to all locations</BasicLink>
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
query SingleLocationQuery($id: String) {
  contentfulLocation(id: {eq: $id}) {
    id
    slug
    title
    body {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          fluid(maxWidth: 400) {
            src
            srcSet
          }
        }
      }
    }
    locationImage {
      fluid(maxWidth: 600) {
        src
        srcSet
      }
    }
  }
}
`

export default LocationPage
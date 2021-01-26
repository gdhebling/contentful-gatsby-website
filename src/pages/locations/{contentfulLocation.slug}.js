import { graphql } from "gatsby";
import React from "react";
import { BasicLink } from ".";
import Head from "../../components/Head";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

const LocationPage = ({ data }) => {
  return (
    <Layout>
      <Head title={`${data.contentfulLocation.title} Office`} />
      <h1>{data.contentfulLocation.title}</h1>
      <p>Welcome to our {data.contentfulLocation.title} office.</p>
      <Img fluid={data.contentfulLocation.locationImage.fluid} alt=""></Img>

      <p>
        <BasicLink to="/locations">&larr; Back to all locations</BasicLink>
      </p>
    </Layout>
  );
};

export const pageQuery = graphql`
  query SingleContent($id: String) {
    contentfulLocation(id: { eq: $id }) {
      id
      slug
      title
      body {
        references {
          contentful_id
          fluid(maxWidth: 400) {
            src
            srcSet
          }
        }
        raw
      }
      locationImage {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default LocationPage;

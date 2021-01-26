import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Head from "../../components/Head";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

export const BasicLink = styled(Link)`
  text-decoration: none;
  color: #232129;

  transition: all 200ms ease;

  &:hover {
    color: rebeccapurple;
  }
`;

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
                <Img fluid={location.locationImage.fluid}></Img>
              </BasicLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const LocationQuery = graphql`
  query LocationQuery {
    allContentfulLocation {
      nodes {
        id
        title
        slug
        locationImage {
          file {
            url
          }
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

export default LocationsPage;

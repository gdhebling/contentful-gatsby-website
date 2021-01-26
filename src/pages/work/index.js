import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Head from "../../components/Head";

export const BasicLink = styled(Link)`
  text-decoration: none;
  color: #232129;

  transition: all 200ms ease;

  &:hover {
    color: rebeccapurple;
  }
`;

const WorkPage = () => {
  return (
    <Layout>
      <Head title="Work" />
      <h1>Work Page</h1>
    </Layout>
  );
};

export default WorkPage;

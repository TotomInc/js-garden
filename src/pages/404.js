import React from 'react';
import { graphql, Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='404: Not Found' />
        <h1>Not Found</h1>
        <p
          style={{
            marginBottom: rhythm(0.25),
          }}
        >
          You just hit a route that doesn&#39;t exist.
        </p>
        <Link to='/'>Go back to home-page.</Link>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

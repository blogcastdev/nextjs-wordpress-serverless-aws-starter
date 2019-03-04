import React, { Component } from 'react';
import Query from '../lib/Query';
import App from '../components/App';
import withError from '../hoc/withError';

class Post extends Component {
  static async getInitialProps({
    query, req, res,
  }) {
    const slug = query.slug ? query.slug : req.params.slug;
    const endpoint = `/wp-json/postlight/v1/post?slug=${slug}`;

    const data = await Query(
      endpoint,
      res,
    );

    return data;
  }

  render() {
    const { data } = this.props;

    return (
      <App>
        <article className="article">
          <h1>{data.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
        </article>
      </App>
    );
  }
}

export default withError(Post);

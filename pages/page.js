import React, { Component } from 'react';
import Query from '../lib/Query';
import App from '../components/App';
import withError from '../hoc/withError';

class Page extends Component {
  static async getInitialProps({
    query, req, res,
  }) {
    if (!query.slug && !req) {
      return false;
    }

    const slug = query.slug ? query.slug : req.params.slug;
    const data = await Query(
      `/wp-json/littlebot/v1/page?slug=${slug}`,
      res,
    );

    return data;
  }

  render() {
    const { data } = this.props;

    return (
      <App>
        <div className="site__content">
          <article className="article">
            <h1>{data.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
          </article>
        </div>
      </App>
    );
  }
}

export default withError(Page);

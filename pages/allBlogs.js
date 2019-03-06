import React, { Component } from 'react';
import Link from 'next/link';
import Query from '../lib/Query';
import App from '../components/App';

export default class Blog extends Component {
  static async getInitialProps({
    res,
  }) {
    const props = await Query(
      '/wp-json/wp/v2/posts',
      res,
    );

    return props;
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <App>
        <h1>Blog</h1>
        {data.map(post => (
          <article key={post.id}>
            <Link href={{ pathname: '/post', query: { slug: post.slug } }} as={`/blog/${post.slug}`} prefetch>
              <a><h2>{post.title.rendered}</h2></a>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
        ))}
      </App>
    );
  }
}

import React, { Component } from 'react';
import Link from 'next/link'
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// Router.prefetch('/allBlogs');


export default class MainNav extends Component {
  static async getInitialProps({
    req, query, pathname, isVirtualCall,
  }) {

    // console.log('called');

  }

  render() {
    return (
      <div className="main-nav">
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href={{pathname: '/allBlogs'}} as="/blog" prefetch>
        <a>Blog</a>
      </Link>
      <Link href={{pathname: '/page', query: { slug: 'accelerate' }} } as="/accelerate" >
        <a>page</a>
      </Link>
      <Link href={{pathname: '/page'}} as="/404here" >
        <a>404 page</a>
      </Link>
    </div>
    );
  }
}

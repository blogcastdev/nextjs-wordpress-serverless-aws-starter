import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';
import Error from 'next/error';
import config from '../config';

import Post from './post';
// import Page from './page';
// import Test from './test';

const PostTemplates = {
  post: Post,
  // 'page': Page,
  // 'test': Test,
};

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const {
      id,
      wpnonce,
      postType,
    } = this.props.router.query;

    fetch(
      `${
        config.apiUrl
      }/wp-json/littlebot/v1/post/preview?id=${id}&_wpnonce=${wpnonce}&nocache=1`,
      { credentials: 'include' }, // required for cookie nonce auth
    )
      .then(res => res.json())
      .then((res) => {
        this.setState({
          data: res,
          postType,
        });
      });
  }

  render() {
    if (!this.state.data) return null;

    if (
      this.state.data
      && this.state.data.code
      && this.state.data.code === 'rest_cookie_invalid_nonce'
    ) { return <Error statusCode={404} />; }

    const Template = PostTemplates[this.state.postType];

    return (
      <div>
        <Template postType={this.state.postType} data={this.state.data} />
      </div>
    );
  }
}

export default withRouter(Preview);

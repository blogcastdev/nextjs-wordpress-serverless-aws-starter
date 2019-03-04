import React from 'react'
import ErrorPage from 'next/error'

export default Component => {
  return class WithError extends React.Component {
    static async getInitialProps(ctx) {
      let props = Component.getInitialProps ? await Component.getInitialProps(ctx) : false;

      if (!props) {
        props = {};
        props.statusCode = 404;
      }

      return props;
    }

    render() {
      if (this.props.statusCode !== 200) {
        return <ErrorPage statusCode={404} />
      }

      return <Component {...this.props} />
    }
  }
}
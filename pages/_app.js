import App, {Container} from 'next/app'
import React from 'react'
import '../assets/css/style.css'

class SG extends App {
  render () {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default SG;
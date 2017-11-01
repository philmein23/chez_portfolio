import React, { Component } from 'react';
import Header from './Header';
import Head from 'next/head';
import Headroom from 'react-headroom';

import Media from 'react-media';

const layout = {
  width: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#edebeb',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const main = {
  flex: '1'
};

const footer = {
  height: 50,
  backgroundColor: 'white',
  boxShadow: '0 -1px 4px rgba(0,0,0, 0.18)'
};

export default class Layout extends Component {
  mediaQueryList = null;

  state = {
    flexDirection: '',
    height: 50
  };

  setMediaUpdate = () => {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');

    this.mediaQueryList.addListener(this.updateHeaderSettings);
  };

  updateHeaderSettings = e => {
    if (e.matches) {
      this.setState({
        flexDirection: '',
        height: 50
      });
    } else {
      this.setState({
        flexDirection: 'column',
        height: 80
      });
    }
  };

  componentDidMount() {
    this.setMediaUpdate();

    this.mediaQueryList.matches
      ? this.setState({ height: 50, flexDirection: '' })
      : this.setState({ height: 80, flexDirection: 'column' });
  }

  render() {
    const { children, href } = this.props;
    console.log(this.props);
    const { flexDirection, height } = this.state;

    return (
      <div style={layout}>
        <Head>
          <title>Welcome to My Porfolio</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,700"
            rel="stylesheet"
          />
        </Head>

        <Headroom style={{ transition: 'all .5s ease-in-out' }}>
          <Header
            href={href}
            flexDirection={flexDirection}
            height={height}
          />
        </Headroom>

        <main style={main}>{children}</main>

        <footer style={footer} />
        <style jsx global>
          {`
            * {
              margin: 0;
              font-family: 'Roboto Condensed', 'Raleway', sans-serif;
            }
          `}
        </style>
      </div>
    );
  }
}

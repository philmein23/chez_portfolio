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
    height: 50,
    maxWidth: '950px',
    imageWidth: 200,
    margin: '40px auto',
    justifyContent: ''
  };

  setMediaUpdate = () => {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');

    this.mediaQueryList.addListener(this.updateHeaderSettings);
  };

  updateHeaderSettings = e => {
    if (e.matches) {
      this.setState({
        flexDirection: '',
        height: 50,
        maxWidth: '950px',
        imageWidth: 200
      });
    } else {
      this.setState({
        flexDirection: 'column',
        height: 80,
        maxWidth: '350px',
        imageWidth: 300
      });
    }
  };

  componentDidMount() {
    this.setMediaUpdate();

    this.mediaQueryList.matches
      ? this.setState({ height: 50, flexDirection: '', maxWidth: '950px', imageWidth: 200 })
      : this.setState({ height: 80, flexDirection: 'column', maxWidth: '350px', imageWidth: 300 });
  }

  render() {
    const { href } = this.props;
    const { flexDirection, height, maxWidth, imageWidth, margin, justifyContent } = this.state;

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

        <main style={main}>
          <section>
            {this.props.render({ flexDirection, height, maxWidth, imageWidth })}
          </section>
        </main>

        <footer style={footer} />
        <style jsx global>
          {`
            * {
              margin: 0;
              font-family: 'Roboto Condensed', 'Raleway', sans-serif;
            }

            section {
              display: flex;
              flex-wrap: wrap;
              flex-flow: row wrap;
              background-color: #fff;
              width: 100%;
              padding: 10px 15px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
              max-width: ${maxWidth};
              justify-content: ${justifyContent};
              margin: ${margin};
            }
          `}
        </style>
      </div>
    );
  }
}

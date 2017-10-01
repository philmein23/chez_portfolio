import React, { Component } from 'react';

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Router from 'next/router';

import Media from 'react-media';

const headerBar = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  height: 50,
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)',
  borderTop: '5px solid black',
  position: 'fixed'
};

const navBar = {
  display: 'flex',
  height: 50
};

const mainTitle = {
  fontFamily: 'Raleway',
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer',
  color: 'rgb(0, 0, 0)'
};

export default class Header extends Component {
  render() {
    const { href } = this.props;

    const navigationBar = () => {
      return [
        <ActiveLink href="/">Portfolio</ActiveLink>,
        <ActiveLink href="/about">About</ActiveLink>,
        <ActiveLink href="/contact">Contact</ActiveLink>
      ];
    };

    return (
      <header style={headerBar}>
        <Link href="/">
          <div style={mainTitle}>illa Art Workz Studios</div>
        </Link>

        <nav style={navBar}>{navigationBar()}</nav>
        <style jsx global>
          {`
            nav > li {
              list-style: none;
              height: 100%;
              display: flex;
              align-items: center;
            }

            header {
              z-index: 1000;
            }
          `}
        </style>
      </header>
    );
  }
}

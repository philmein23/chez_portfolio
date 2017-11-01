import React, { Component } from 'react';

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Router from 'next/router';

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
    const { href, flexDirection = '', height = 50 } = this.props;

    const navBar = height => ({ height });
    const headerBar = (flexDirection, height) => ({
      flexDirection,
      height
    });

    const navigationBar = () => {
      return [
        <ActiveLink href="/">Portfolio</ActiveLink>,
        <ActiveLink href="/about">About</ActiveLink>,
        <ActiveLink href="/contact">Contact</ActiveLink>
      ];
    };

    return (
      <header style={headerBar(flexDirection, height)}>
        <Link href="/">
          <div style={mainTitle}>illa Art Workz Studios</div>
        </Link>

        <nav style={navBar(height)}>{navigationBar()}</nav>

        <style jsx global>
          {`
            nav > li {
              list-style: none;
              height: 100%;
              display: flex;
              align-items: center;
            }

            nav {
              display: flex;
            }

            header {
              display: flex;
              width: 100%;
              justify-content: space-between;
              align-items: center;
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
              border-top: 5px solid black;
              z-index: 1000;
            }
          `}
        </style>
      </header>
    );
  }
}

import React, { Component } from 'react';

import Layout from '../components/Layout';
import Icon from '../components/Icon';
import { ICONS } from '../constants/constants';



export default ({ url }) => {
  const text = {
    fontFamily: 'Raleway'
  };

  return (
    <Layout 
      href={url.pathname}
      render={() => (
        <div className="contactContainer">
        <text style={text}>
          Chez is available for special request alongside purchasing
          his current works of art. Please contact him at his
          <span>
            <a href="mailto:iawstudios1199@gmail.com">
              <span className="email">e-mail</span>
            </a>
          </span>
        </text>
        <br />
        <div>
          <span style={text}>
            Also, please visit his instagram to see more of his
            artwork.
          </span>
          <span className="instagram-icon">
            <Icon
              href={'https://www.instagram.com/iawstudios1199/'}
              iconName={ICONS.INSTAGRAM}
            />
          </span>
        </div>
      </div>
      )}>

      <style jsx>
        {`
          .contactContainer {
            display: flex;
            width: 100%;
            flex-direction: column;
          }

          .email {
            margin-left: 5px;
            font-family: 'Raleway'
          }

          a:link {
            text-decoration: none;
            color: #e17474;
          }

          .instagram-icon {
            margin-left: 5px;
          }
        `}
      </style>
    </Layout>
  );
};

import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    const { children, maxWidth = 950 } = this.props;

    return (
      <section style={{ maxWidth }}>
        {children}

        <style jsx>
          {`
            section {
              display: flex;
              flex-wrap: wrap;
              flex-flow: row wrap;
              background-color: #fff;
              width: 100%;
              margin: 75px auto;
              padding: 10px 15px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
            }
          `}
        </style>
      </section>
    );
  }
}

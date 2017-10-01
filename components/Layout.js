import Header from './Header';
import Head from 'next/head';

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

const Layout = ({ children, href }) => (
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

    <Media query="(max-width: 575px)">
      {matches =>
        matches ? <Header href={href} flexDirection={'column'} height={80}/> : <Header href={href} />}
    </Media>

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

export default Layout;

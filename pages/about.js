import Layout from '../components/Layout';

const aboutContent = {
  backgroundColor: '#FFF',
  maxWidth: 820,
  width: '100%',
  margin: '50px auto 0',
  padding: '10px 15px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)'
};

const text = {
  textAlign: 'left',
  color: 'rgb(108, 107, 107)',
  fontSize: '16px',
  lineHeight: '1.5em',
  paddingRight: '10px'
};

const headerTitle = {
  color: '#222',
  marginBottom: '32px',
  textTransform: 'uppercase'
};

const container = {
  display: 'flex'
};

export default ({ url }) => (
  <Layout href={url.pathname}>
    <section style={aboutContent}>
      <h1 style={headerTitle}>About The Artist</h1>
      <div style={container}>
        <text style={text}>
          New York native Chez Negron is a self-taught artist that has
          been creating art since he was a child. He is said to have
          picked up a pencil at birth and began to draw. Chez was
          inspired by his mother Grace Vargas- an artist herself who
          was an Art Teacher for NYC Board of Education for over 20
          years.
          <br />
          <br />
          Chez passions began with studying various different forms of
          art...including traditional art, comic book art, graffiti,
          abstract and more. Inspired by his mother and love of his
          city, Chez works with many different mediums. Including:
          Spray Paint, Acrylic, 3-D Paint, Watercolors, Oil Paints,
          Pens, Pencils, Markers, Colored Pencils, Pastels, Charcoal,
          Stencils, and more. “Money making Manhattan” helped mold
          Chez into the artist he is today.
          <br />
          <br />
          He currently is living 45 minutes outside of DC in Ashburn
          with his girlfriend and pup Chalupa Batman.
        </text>
        <img src="../static/chez.jpg" />
      </div>
    </section>
  </Layout>
);

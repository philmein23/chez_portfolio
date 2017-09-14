const Content = ({ children, maxWidth = 980 }) => {
  const mainContent = {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row-wrap',
    backgroundColor: '#FFF',
    maxWidth: `${maxWidth}px`,
    width: '100%',
    margin: '75px auto',
    padding: '10px 15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0, 0.18)'
  };

  return (
    <section className="gutter" style={mainContent}>
      {children}
    </section>
  );
};

export default Content;

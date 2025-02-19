export const styles = {
    appContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Roboto', sans-serif",
      transition: 'background 0.3s ease',
    },
    card: {
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      fontSize: '1rem',
      boxSizing: 'border-box',
      transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease',
    },
    fileInputLabel: {
      display: 'block',
      padding: '0.75rem',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '1rem',
      textAlign: 'center',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    fileInput: {
      display: 'none',
    },
    customizationContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    colorContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '0.5rem',
      fontSize: '0.9rem',
      transition: 'color 0.3s ease',
    },
    colorInput: {
      width: '50px',
      height: '50px',
      border: 'none',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.1)',
      },
    },
    sizeContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1rem',
    },
    rangeInput: {
      width: '100%',
    },
    button: {
      width: '100%',
      padding: '0.75rem 1.5rem',
      margin: '1rem 0',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      color: 'white',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      ':hover': {
        transform: 'translateY(-2px)',
      },
    },
    qrCodeContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '2rem',
      transition: 'background-color 0.3s ease',
    },
  };
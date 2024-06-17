
import React from 'react';
import SearchBar from './SearchBar';

const CustomerHeader = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      marginBottom: '20px',
      marginTop: '20px',
      
    },
    arrowButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0', 
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '50%', 
      marginRight: '10px',
      fontSize: '20px',
      width: '40px',
      height: '40px',
      marginTop: '-38px',
    },
    arrowIcon: {
      color: '#6e6e6e', 
    },
    detailsText: {
      flexGrow: 1,
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '-38px', 
      fontFamily: 'Epilogue, sans-serif',
    },
    editButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#4285f4', 
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      fontSize: '14px',
      cursor: 'pointer',
      marginTop: '12px', 
    },
    editIcon: {
      marginRight: '5px',
      fontSize: '14px',
    },
    newedit:{
      display: 'flex',
      justifyContent:'space-between',
      marginTop:'-45px'
    }
  };

  return (
    <div style={styles.container}>
      
      <button style={styles.arrowButton}>
        <span style={styles.arrowIcon}>→</span>
      </button>
      <span style={styles.detailsText}>Customer details</span>
      <div style={styles.newedit}>
      <SearchBar />
      <button style={styles.editButton}>
        <span style={styles.editIcon}>✎</span>
        Edit
      </button>
      </div>
    </div>
  );
};

export default CustomerHeader;

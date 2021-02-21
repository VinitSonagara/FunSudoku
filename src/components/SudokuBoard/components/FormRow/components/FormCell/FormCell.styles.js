const useStyles = (theme) => ({
    cell: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '2em',
    },
    cellText: {
      fontSize: '1.5em',
    },
    borderTop: {
      borderTop: '3px solid black',
    },
    borderLeft: {
      borderLeft: '3px solid black',
    },
    borderRight: {
      borderRight: '3px solid black',
    },
    borderBottom: {
      borderBottom: '3px solid black',
    },
  });
  
  export default useStyles;
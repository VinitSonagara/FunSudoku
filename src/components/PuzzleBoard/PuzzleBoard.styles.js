const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '2em',
    },
    paperInner: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '1em',
    },
    text: {
      fontSize: '0.8em',
    },
  });

  export default useStyles;
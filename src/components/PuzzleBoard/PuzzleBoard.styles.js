import styled from 'styled-components';

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
  innerCellText: {
    fontSize: '0.5em',
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

const SudokuBoard = styled.div`
  margin: 5px;
`;

export {
  useStyles,
  SudokuBoard,
};
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  useStyles,
  SudokuBoard,
} from './PuzzleBoard.styles';
import { withStyles } from '@material-ui/core';

class PuzzleBoard extends Component {

  FormInnerBoard() {
    let row = [];
    for(let i=0; i<9; i++){
      row.push(
        <Grid item sm={4}>
          <Paper className={this.props.classes.paperInner} square={true}>
            <div className={this.props.classes.innerCellText}>
              2
            </div>
          </Paper>
        </Grid>
      )
    }
    return row;
  }

  FormRow(row) {
    let row1 = [];
    const {
      classes: {
        paper,
        borderTop,
        borderLeft,
        borderRight,
        borderBottom,
      }
    } = this.props;
    let bTop = row === 0 ? borderTop : '';
    let bBottom = (row === 2 || row === 5 || row === 8) ? borderBottom : ''; 
    for(let i=0; i<9; i++){
      let bLeft = i === 0 ? borderLeft : '';
      let bRight = (i === 2 || i === 5 || i === 8) ? borderRight : '';
      row1.push(
        <Grid
          container={false}
          item
          sm={1}
          id={`${row}${i}`}
          className={`${bTop} ${bLeft} ${bRight} ${bBottom}`}
        >
          <Paper
            className={paper}
            square={true}
          >
            2
          </Paper>
          {/* { this.FormInnerBoard() } */}
        </Grid>
      );
    }
    return row1;
  }

  render() {
    let sudokuBoard = [];
    for(let i=0; i<9;i++){
      sudokuBoard.push(
        <Grid
          container
          item
          sm={12}
          key={i}
          id={i}
          // className={`${borderTop}`}
        >
          { this.FormRow(i) }
        </Grid>
      );
    }
    console.log(sudokuBoard[0].props.children[2].props.id);
    return (
      <SudokuBoard>
        <Grid container justify="center">
         <Grid container item  sm={8} md={6}>
          { sudokuBoard }
         </Grid>
        </Grid>
      </SudokuBoard>
    );
  }
}

export default withStyles(useStyles)(PuzzleBoard);
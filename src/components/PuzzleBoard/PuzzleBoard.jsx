import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './PuzzleBoard.styles';
import { withStyles } from '@material-ui/core';

class PuzzleBoard extends Component {

  FormInnerBoard() {
    let row = [];
    for(let i=0; i<9; i++){
      row.push(
        <Grid item sm={4}>
          <Paper className={this.props.classes.paperInner}>
            <div className={this.props.classes.text}>
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

    const formInnerBoard = this.FormInnerBoard();
    const row2 = <Grid container item sm={1}>
          { formInnerBoard }
        </Grid>;

    for(let i=0; i<9; i++){
        row1.push(
            <Grid item sm={1} id={`${row}${i}`}>
              <Paper className={this.props.classes.paper}>
                <div>2</div>
              </Paper>
            </Grid>
          )
    }
    console.log(row1[row].props.id);
    if(row1[row].props.id === '88'){
      row1[row] = row2;
    }
    return row1;
  }

  render() {
    let sudokuBoard = [];
    for(let i=0; i<9;i++){
      sudokuBoard.push(
        <Grid container item sm={12} key={i} id={i}>
          { this.FormRow(i) }
        </Grid>
      );
    }
    console.log(sudokuBoard[0].props.children[2].props.id);
    return (
      <div>
        <Grid container item xs={12} sm={8} md={6}>
          { sudokuBoard }
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(PuzzleBoard);
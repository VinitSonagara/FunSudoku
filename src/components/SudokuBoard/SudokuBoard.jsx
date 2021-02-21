import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Board } from './SudokuBoard.styles';
import FormSudokuBoard from './components/FormSudokuBoard';

class SudokuBoard extends Component {
    render() {
        return (
            <Board>
                <Grid container justify="center">
                    <Grid container item  sm={8} md={6}>
                        <FormSudokuBoard />
                    </Grid>
                </Grid>
            </Board>
        );
    }
}

export default SudokuBoard;
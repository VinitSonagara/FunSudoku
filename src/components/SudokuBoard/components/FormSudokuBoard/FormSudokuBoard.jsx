import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormRow from '../FormRow';

class FormSudokuBoard extends Component {
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
                >
                    <FormRow 
                        row={i}
                    />
                </Grid>
            );
        }
        return sudokuBoard;
    }
}

export default FormSudokuBoard;
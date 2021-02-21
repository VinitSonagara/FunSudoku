import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormRow from '../FormRow';

class FormSudokuBoard extends Component {

    constructor(props){
        super(props);
        const cellValues = [
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
        ];
        this.state ={
            cellValues,
        }
    }

    render() {
        const {
            cellValues,
        } = this.state;
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
                        cellValues={cellValues[i]}
                    />
                </Grid>
            );
        }
        return sudokuBoard;
    }
}

export default FormSudokuBoard;
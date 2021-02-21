import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './FormRow.styles';
import { withStyles } from '@material-ui/core';
import FormInnerBoard from '../FormInnerBoard';
import FormCell from './components/FormCell';

class FormRow extends Component {

    constructor(props){
        super(props);
        const row = [
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
        this.state = {
            row,
        }
    }

    render() {
        let cells = [];
        const {
            row: sudokuRow,
        } = this.state;
        const {
            classes: {
                borderTop,
                borderLeft,
                borderRight,
                borderBottom,
            },
            row,
        } = this.props;
        let bTop = row === 0 ? borderTop : '';
        let bBottom = (row === 2 || row === 5 || row === 8) ? borderBottom : ''; 
        for(let i=0; i<9; i++){
            let bLeft = i === 0 ? borderLeft : '';
            let bRight = (i === 2 || i === 5 || i === 8) ? borderRight : '';
            cells.push(
                <Grid
                container={row === 2 && i === 5}
                item
                sm={1}
                id={`${row}${i}`}
                className={`${bTop} ${bLeft} ${bRight} ${bBottom}`}
                >
                {
                    row === 2 && i === 5 ? (
                        <FormInnerBoard />
                    ) : (
                        <FormCell 
                            value={sudokuRow[row][i]}
                        />
                    )
                }
                </Grid>
            );
        }
        return cells;
    } 
}

export default withStyles(useStyles)(FormRow);
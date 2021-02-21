import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormInnerCell from './components/FormInnerCell';

class FormInnerBoard extends Component {

    render() {
        let innerCells = [];
        for(let i=0; i<9; i++){
            innerCells.push(
                <Grid item sm={4}>
                    <FormInnerCell />
                </Grid>
            );
        }
        return innerCells;
    }
}

export default FormInnerBoard;
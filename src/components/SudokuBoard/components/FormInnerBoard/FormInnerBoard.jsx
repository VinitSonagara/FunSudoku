import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './FormInnerBoard.styles';
import { withStyles } from '@material-ui/core';

class FormInnerBoard extends Component {
    render() {
        let innerCells = [];
        const {
            classes: {
                innerCell,
                innerCellText,
            }
        } = this.props;
        for(let i=0; i<9; i++){
            innerCells.push(
                <Grid item sm={4}>
                    <Paper
                        className={innerCell}
                        square={true}
                    >
                        <div className={innerCellText}>
                            2
                        </div>
                    </Paper>
                </Grid>
            );
        }
        return innerCells;
    }
}

export default withStyles(useStyles)(FormInnerBoard);
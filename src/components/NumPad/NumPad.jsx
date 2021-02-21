import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import useStyles from './NumPad.styles';

class NumPad extends Component {

    render() {
        const {
            classes: {
                paper,
                text,
            }
        } = this.props;
        let numPad = [];
        for(let i=1; i<=9; i++){
            numPad.push(
                <Grid item xs={4}>
                    <Paper className={paper}>
                        <div className={text}>
                            {i}
                        </div>
                    </Paper>
                </Grid>
            )
        }
        return (
            <Grid container>
                {numPad}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(NumPad);
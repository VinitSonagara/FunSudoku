import React, { Component } from 'react';
import Difficulty from '../Difficulty/Difficulty';
import SudokuBoard from '../SudokuBoard';
import NumPad from '../NumPad';
import Grid from '@material-ui/core/Grid';

class Body extends Component {
    render() {
        return (
            <React.Fragment>
                <Difficulty />
                <Grid
                    container
                >
                    <Grid item xs={8}>
                        <SudokuBoard />
                    </Grid>
                    <Grid item xs={2}>
                        <NumPad />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Body;
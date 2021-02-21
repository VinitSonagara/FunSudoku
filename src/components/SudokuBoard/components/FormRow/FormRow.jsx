import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './FormRow.styles';
import { withStyles } from '@material-ui/core';
import FormInnerBoard from '../FormInnerBoard';
import FormCell from './components/FormCell';

class FormRow extends Component {

    constructor(props) {
        super(props);
        const {
            classes: {
                borderTop,
                borderBottom,
            },
            row,
        } = this.props;
        this.state = {
            bTop: row === 0 ? borderTop : '',
            bBottom: (row === 2 || row === 5 || row === 8) ? borderBottom : '',
        }
    }

    render() {
        let cells = [];
        const {
            classes: {
                borderLeft,
                borderRight,
            },
            row,
            cellValues,
        } = this.props;
        const {
            bTop,
            bBottom,
        } = this.state;
        for(let i=0; i<9; i++){
            let bLeft = i === 0 ? borderLeft : '';
            let bRight = (i === 2 || i === 5 || i === 8) ? borderRight : '';
            cells.push(
                <Grid
                    container={row === 10 && i === 12}
                    item
                    sm={1}
                    id={`${row}${i}`}
                    className={`${bTop} ${bLeft} ${bRight} ${bBottom}`}
                >
                    {
                        row === 10 && i === 12 ? (
                            <FormInnerBoard />
                        ) : (
                            <FormCell 
                                value={cellValues ? cellValues[i] : ''}
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
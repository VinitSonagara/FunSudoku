import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormRow from '../FormRow';
import getCellValues from './FormSudokuBoard.query';
class FormSudokuBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            cellValues: [],
        }
    }

    componentDidMount = async () => {
        const cellValues = await getCellValues();
        this.setState({
            cellValues,
        });
    }

    render() {
        const { cellValues } = this.state;
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
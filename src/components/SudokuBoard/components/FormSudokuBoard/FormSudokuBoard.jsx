import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormRow from '../FormRow';
import axios from 'axios';
class FormSudokuBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            cellValues: [],
        }
    }

    componentDidMount = () => {
        this.getCellValues();
    }

    getCellValues = () => {
        axios.get(`https://sugoku.herokuapp.com/board?difficulty=easy`)
            .then(data => {
                const newCellValues = data.data.board;
                this.setState({
                    cellValues: newCellValues,
                });
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
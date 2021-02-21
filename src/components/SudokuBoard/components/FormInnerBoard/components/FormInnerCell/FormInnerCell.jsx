import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './FormInnerCell.styles';
import { withStyles } from '@material-ui/core';

class FormInnerCell extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }

    onClick = () => {
        this.setState({
            value: 2,
        });
    }

    render() {
        const {
            classes: {
                innerCell,
                innerCellText,
            },
        } = this.props;
        const {
            value,
        } = this.state;
        return (
            <Paper
                className={innerCell}
                square={true}
                onClick={this.onClick}
            >
                <div 
                    className={innerCellText}
                >
                    {value}
                </div>
            </Paper>
        );
    }
}

export default withStyles(useStyles)(FormInnerCell);
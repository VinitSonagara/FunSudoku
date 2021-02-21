import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './FormCell.styles';
import { withStyles } from '@material-ui/core';

class FormCell extends Component {

    constructor(props){
        super(props);
        const {
            value,
        } =this.props;
        this.state = {
            value,
        }
    }

    onClick = () => {
        this.setState({
            value: 7,
        });
    }

    render() {
        const {
            classes: {
                cell,
                cellText,
            },
        } = this.props;
        const { value } = this.state;
        return (
            <Paper
                className={cell}
                square={true}
            >
                <div
                    className={cellText}
                    onClick={this.onClick}
                >
                    {value}
                </div>
        </Paper>
        )
    }
}

export default withStyles(useStyles)(FormCell);
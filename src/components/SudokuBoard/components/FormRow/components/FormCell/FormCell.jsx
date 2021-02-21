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
        // console.log(value);
        this.state = {
            value,
        }
    }

    componentDidUpdate(prevProps) {
        const { value } = this.props;
        if(value !== prevProps.value){
            this.setState({
                value,
            });
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
                    {value !== 0 ? value : ''}
                </div>
        </Paper>
        )
    }
}

export default withStyles(useStyles)(FormCell);
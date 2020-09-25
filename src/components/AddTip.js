import React, { Component } from 'react'
import {Form, Input, Button} from 'reactstrap';

class AddTip extends Component {
    state = {
        amount: '',
        person_count: '',
    }

    onChange = (e) => {
        if (isNaN(e.target.value)) {
            this.setState({ [e.target.name]: this.state[e.target.name] });
        } else{
            this.setState({ [e.target.name]: e.target.value });
        }        
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.amount === '') {
            alert('Please Enter Amount.');
            return false;
        }
        if (this.state.person_count === '') {
            alert('Please Enter Number of Person.');
            return false;
        }
        this.props.addTip(this.state.amount, this.state.person_count);
        this.setState({
            amount: '',
            person_count: '',
        })
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <Input type="text" className="col-12" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.onChange} style={inputStyle}/>
                <Input type="text" name="person_count" placeholder="# of Person" value={this.state.number} onChange={this.onChange} style={inputStyle}/>
                <Button>Add Tip</Button>
            </Form>
        )
    }
}

const inputStyle = {
    flex: '10',
    padding: '10px',
    margin: '1px',
    borderRadius: '5px',
    outline: 'none'
}

export default AddTip;
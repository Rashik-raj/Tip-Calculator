import React, { Component } from 'react'

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
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.onChange} style={{ flex: '10', padding: '10px' }}/>
                <input type="text" name="person_count" placeholder="Number of Person" value={this.state.number} onChange={this.onChange} style={{ flex: '10', padding: '10px' }}/>
                <input type="submit" value="Add Tip" style={{ flex: '1' }}/>
            </form>
        )
    }
}

export default AddTip;
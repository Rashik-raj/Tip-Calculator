import React, { Component } from 'react'

class TipItem extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.tip.amount}</td>
                    <td>{this.props.tip.person_count}</td>
                    <td>{this.props.tip.tip}</td>
                    <td>{this.props.tip.total}</td>
                    <td>{this.props.tip.total_per_person}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default TipItem;
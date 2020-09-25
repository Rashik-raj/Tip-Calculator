import React, { Component } from 'react';
import { Table } from 'reactstrap';

import TipItem from './TipItem';

class Tips extends Component {
    tipDisplay = () => {
        if (this.props.len === 0) {
            return <h1>You don't have a tip to display. Please, Add a tip.</h1>;
        } else {
            return (
                <Table dark>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Number of Person</th>
                            <th>Tip</th>
                            <th>Total</th>
                            <th>Total per Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.tips.map(tip => <TipItem key={tip.id} tip={tip}/>) }
                    </tbody>
                </Table>
            );
        }
    };
    render() {
        return (
            <div>
                {this.tipDisplay()}
            </div>
        )
    }
}

export default Tips;

import React, { Component } from 'react';
import { Table } from 'reactstrap';

import TipItem from './TipItem';

class Tips extends Component {
    tipDisplay = () => {
        if (this.props.len === 0) {
            return <h1>You don't have a tip to display. Please, Add a tip.</h1>;
        } else {
            return (
                <div style={tableStyle}>
                    <Table striped className="table-hover table-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th># of Person</th>
                                <th>Tip</th>
                                <th>Total</th>
                                <th>Total per Person</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.tips.map((tip, index) => <TipItem key={tip.id} index={index} tip={tip}/>) }
                        </tbody>
                    </Table>
                </div>
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

const tableStyle = {
    overflow: 'hidden',
    overflowX: 'scroll',
}

export default Tips;

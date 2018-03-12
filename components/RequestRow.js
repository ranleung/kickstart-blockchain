import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = await Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.pushRoute(`/campaigns/${this.props.address}/requests`);
  }

  onFinalize = async () => {
    const campaign = await Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.pushRoute(`/campaigns/${this.props.address}/requests`);
  }

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const { description, value, recipient, approvalCount, complete } = request;
    const readyToFinalize = approvalCount > approversCount / 2;

    return (
      <Row disabled={complete} positive={readyToFinalize && !complete}>
        <Cell>{id}</Cell>
        <Cell>{description}</Cell>
        <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
        <Cell>{recipient}</Cell>
        <Cell>{approvalCount}/{approversCount}</Cell>
        <Cell>
          {complete ? null :
            <Button color="green" basic onClick={this.onApprove}>Approve</Button>
          }
        </Cell>
        <Cell>
          {complete ? null :
            <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
          }
        </Cell>
      </Row>
    )
  }
}

export default RequestRow;

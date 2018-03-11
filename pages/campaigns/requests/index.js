import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  render() {
    const { address } = this.props;

    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default RequestIndex;

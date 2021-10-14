import React from "react";
import { Header, Table, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import logo from "../logo/mindful.png";

const Home = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Partner</Table.HeaderCell>
        <Table.HeaderCell>Prefix</Table.HeaderCell>
        <Table.HeaderCell>Logo/Preroll</Table.HeaderCell>
        <Table.HeaderCell>Ofsted Rating</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h5" textAlign="left">
            C Mindful College
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>CMC</Table.Cell>
        <Table.Cell id="centre">
          <Image src={logo} className="logo" />
        </Table.Cell>

        <Table.Cell textAlign="right">
          <Header as="h5" textAlign="left">
            Requires improvement
          </Header>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default Home;

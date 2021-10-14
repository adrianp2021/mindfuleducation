import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "o", text: "Outstanding", value: "outstanding" },
  { key: "g", text: "Good", value: "good" },
  { key: "r", text: "Requires improvement", value: "requires improvement" },
  { key: "i", text: "Inadequate", value: "inadequate" },
  { key: "na", text: "NA", value: "na" },
];

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form className="search">
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" />
          <Form.Input fluid label="Prefix" />
          <Form.Select fluid label="Ofsted Rating" options={options} />
        </Form.Group>
        <Form.Button>Apply</Form.Button>
      </Form>
    );
  }
}

export default FormExampleSubcomponentControl;

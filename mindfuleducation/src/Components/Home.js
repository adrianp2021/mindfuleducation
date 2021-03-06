import React, { useState, useEffect } from "react";
import { Header, Table, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Form } from "semantic-ui-react";

const Home = () => {
  const url =
    "https://mindfuleducation-cdn.s3.eu-west-1.amazonaws.com/misc/data.json";
  const [product, setProduct] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchPrefix, setSearchPrefix] = useState("");
  const [searchRating, setSearchRating] = useState('')

  const options = [
    { key: "o", text: "Outstanding", value: "outstanding" },
    { key: "g", text: "Good", value: "good" },
    { key: "r", text: "Requires improvement", value: "requires improvement" },
    { key: "i", text: "Inadequate", value: "inadequate" },
    { key: "na", text: "NA", value: "na" },
  ];

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data.getColleges);
    });
  }, []);
  // console.log(product);

  // const handleChange = (event) => {
  //   setSearchPrefix(event.target.value);
  // };

  return (
    <>
      <Form className="search">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Prefix"
            onChange=
            {(event) => {
              setSearchPrefix(event.target.value);
            }}
          />
          <Form.Select fluid label="Ofsted Rating" options={options} />
        </Form.Group>
        <Form.Button>Apply</Form.Button>
      </Form>

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Partner</Table.HeaderCell>
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>Logo/Preroll</Table.HeaderCell>
            <Table.HeaderCell>Ofsted Rating</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {product
          // eslint-disable-next-line array-callback-return
          .filter(item => item.groupPrefix.toLowerCase().includes(searchPrefix))
          .filter(item => item.name.toLowerCase().includes(searchTerm))
          .filter(item => item.ofstedRating.toLowerCase().includes(searchTerm))
          .map((item) => {
            return (
              <>
                <Table.Body key={item}>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" textAlign="left">
                        {item.name}
                      </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>{item.groupPrefix}</Table.Cell>
                    <Table.Cell id="centre">
                      <Image src={item.logo} className="logo" />
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      <Header as="h5" textAlign="left">
                        {item.ofstedRating}
                      </Header>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </>
            );
          })}
      </Table>
    </>
  );
};

export default Home;

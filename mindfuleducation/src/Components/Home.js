import React, { useState, useEffect } from "react";
import { Header, Table, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

const Home = () => {
  const url =
    "https://mindfuleducation-cdn.s3.eu-west-1.amazonaws.com/misc/data.json";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data.getColleges);
    });
  }, []);
  console.log(product);

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Partner</Table.HeaderCell>
          <Table.HeaderCell>Prefix</Table.HeaderCell>
          <Table.HeaderCell>Logo/Preroll</Table.HeaderCell>
          <Table.HeaderCell>Ofsted Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {product.map((item) => {
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
  );
};

export default Home;

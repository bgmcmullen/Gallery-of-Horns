import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function NumberOfHorns(props) {


  const handleSelect = (eventKey) => {
    props.handleSelectChange(eventKey);
  }

  return (
    <Form>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-menu">
          Select Number of Horns
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="3">3</Dropdown.Item>
          <Dropdown.Item eventKey="100">100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Form>
  );
}

export default NumberOfHorns;
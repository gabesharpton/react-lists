import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


function List1() {
  return (
    <div className="List1">
      <ListGroup horizontal>
          <ListGroup.Item active>1</ListGroup.Item>
          <ListGroup.Item info>2</ListGroup.Item>
          <ListGroup.Item>3</ListGroup.Item>
          <ListGroup.Item>4</ListGroup.Item>
          <ListGroup.Item>5</ListGroup.Item>
      </ListGroup>
      <Button>Hello</Button>
    </div>
  );
}

export default List1;

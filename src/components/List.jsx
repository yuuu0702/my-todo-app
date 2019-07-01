import React from 'react';
import {Button, Col, Row, Form, ListGroup, ButtonToolbar} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const List = (props) => (
  <Container>
    {props.todos.map((todo, i) => {
      return (
      <Card className="card-size">
      <Card.Header>
        <Row>
          <Col sm={10}>{todo.limitDate}までに終わらせます！</Col>
          <Col sm={2}>{todo.tag}</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.subtitle}</Card.Text>
        <ButtonToolbar>
          <Button variant="success" onClick = {() => {props.handleShow()}}>完了</Button>
          <Button variant="danger" onClick = {() => {props.handleRemove(i)}}>削除</Button>
        </ButtonToolbar>
      </Card.Body>
      </Card>
      );
    })}
  </Container>
);

export default List;
import React from 'react';
import {Button, Col, Row, Form, ListGroup, ButtonToolbar} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };

const List = (props) => (
  <Card style={{ width: '18rem' }}>
    {props.todos.map((todo, i) => {
      return (
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">サブタイトル</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <ButtonToolbar>
          <Button variant="success" onClick = {() => {props.handleRemove(i)}}>完了</Button>
          <Button variant="danger" onClick = {() => {props.handleRemove(i)}}>削除</Button>
        </ButtonToolbar>
      </Card.Body>
      );
    })}
  </Card>
);




  /*<ListGroup>
    {props.todos.map((todo, i) => {
      return (
        <Col xs={12} sm={6}>
            <ListGroup.Item Key={i} className="list-group-item">
            {todo.title}
            </ListGroup.Item>
          <Button variant="danger" onClick={() => props.handleRemove(i)}>Delete</Button>
        </Col>
      );
    })}
  </ListGroup>
);

 const List = (props) => (
  <Form>
    {props.todos.map((todo, i) => {
      return <Form.Group key={i}> {todo.title}   
        <Row>
          <Col sm={3}>
            <Form.Control type="text" onInput={this.onInput} />
          </Col>
            <Button variant="danger" onClick={() => props.handleRemove(i)}>Delete</Button>
        </Row>
      </Form.Group>
    })};
  </Form>
); */

export default List;